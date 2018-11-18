import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/core/movie-search.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from '../store/movie';
import * as MovieActions from '../store/actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  private movies: Observable<Movie[]>;
  private movieSearchControl: FormControl;
  private selectedMovie: Movie;

  constructor(private movieSearchService: MovieSearchService, private store: Store<any>) {
    this.movies = this.store.select('movie');
    this.movieSearchControl = new FormControl();
  }

  ngOnInit() {
    this.movieSearchControl.valueChanges.subscribe((searchTerm: string) => {
      this.removeMovies();
      this.movieSearchService.searchMovies(searchTerm).subscribe(data => {
        if (data.Search === undefined) {
          return;
        }
        this.addToMovies(data.Search);
      }
      );
    });
  }

  private addToMovies(movies: Movie[]): void {
    for (let i = 0; i < movies.length; i++) {
      this.store.dispatch(new MovieActions.AddMovie(movies[i]));
    }
  }

  private removeMovies(): void {
    this.store.dispatch(new MovieActions.RemoveMovies());
  }

  public selectMovie(movieTitle: string): void {
    this.movieSearchService.getMovieById(movieTitle).subscribe(data => {
      this.selectedMovie = data;
    }
    );
  }

  public onSubmit() {
    this.selectMovie(this.movieSearchControl.value);
  }
}
