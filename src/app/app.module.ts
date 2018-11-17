
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { MovieSearchModule } from 'src/app/movie-search/movie-search.module';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from 'src/app/store/movie-reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    StoreModule.forRoot({ movie: movieReducer }),
    MovieSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
