import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private httpClient: HttpClient) { }

  public searchMovies(searchParam: string): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.omdbApiRoot}&s=${searchParam}`);
  }

  public getMovieById(searchParam: string): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.omdbApiRoot}&t=${searchParam}`);
  }
}
