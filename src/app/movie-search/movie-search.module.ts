import { NgModule } from '@angular/core';
import { MovieSearchComponent } from 'src/app/movie-search/movie-search.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MovieSearchComponent],
  imports: [
    SharedModule
  ],
  exports: [MovieSearchComponent]
})
export class MovieSearchModule { }
