
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { MovieSearchModule } from 'src/app/movie-search/movie-search.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MovieSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
