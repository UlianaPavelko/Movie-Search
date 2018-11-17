import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private httpClient: HttpClient) { }

  public searchMovies(searchParam: string): Observable<any> {
    return this.httpClient
      .get<any>(`http://www.omdbapi.com/?apikey=3f29742a&s=${searchParam}`);
  }
}
