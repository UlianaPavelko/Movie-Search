import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/core/movie-search.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  private movies: Object;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {
    this.movieSearchService.searchMovies('Avatar').subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    }
    );
  }

}
