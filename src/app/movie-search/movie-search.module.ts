import { NgModule } from '@angular/core';
import { MovieSearchComponent } from 'src/app/movie-search/movie-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MovieSearchComponent, MovieComponent],
  imports: [
    SharedModule
  ],
  exports: [MovieSearchComponent]
})
export class MovieSearchModule { }
