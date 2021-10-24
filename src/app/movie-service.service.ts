import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movie } from './interface/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private http: HttpClient) {}

  url = 'http://test-movies-api.vercel.app/api/movies';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  createMovie(Movie: movie): Observable<movie> {
    return this.http.post<movie>(this.url, Movie);
  }

  getMovieById(id: number): Observable<movie> {
    return this.http.get<movie>(this.url + '/' + id);
  }

  updateMovie(Movie: movie, id: number): Observable<void> {
    return this.http.put<void>(this.url + '/' + id, Movie);
  }

  deleteMovie(id: number) {
    return this.http.delete<movie>(this.url + '/' + id, this.httpOptions);
  }
}
