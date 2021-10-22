import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movie } from './interface/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<movie[]> {
    return this.http.get<movie[]>('https://test-movies-api.vercel.app/api/movies')
  }
}
