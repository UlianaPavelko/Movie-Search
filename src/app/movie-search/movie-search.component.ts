import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/core/movie-search.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
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
  movieSearchCtrl: FormControl;

  constructor(private movieSearchService: MovieSearchService, private store: Store<any>) {
    this.movies = this.store.select('movie');
  }

  ngOnInit() {
    this.movieSearchCtrl = new FormControl();

    this.movieSearchCtrl.valueChanges.subscribe(
      (mode: string) => {
        console.log(mode);
        this.removeMovie();
        this.movieSearchService.searchMovies(mode).subscribe(data => {
          if (data.Search === undefined) {
            return;
          }
          for (let i = 0; i < data.Search.length; i++) {
            this.addToMovies(data.Search[i]);
          }
        }
        );
      });
  }


  private addToMovies(movie: Movie) {
    this.store.dispatch(new MovieActions.AddMovie(movie));
  }

  private removeMovie() {
    this.store.dispatch(new MovieActions.RemoveMovie());
  }

}
