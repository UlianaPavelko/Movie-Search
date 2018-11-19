import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie-search/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }

  @Input() movie: Movie;

  ngOnInit() { }

}
