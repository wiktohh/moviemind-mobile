import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Movie, Review } from '../../models/movies/movie.model';
import { ReviewMovie } from '../../models/movies/review.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/Movie`);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/Movie/${id}`);
  }

  getMovieByTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/Movie/title/${title}`);
  }

  getFavorites(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/Movie/favorite`);
  }

  addToFavorites(id: string): Observable<Movie> {
    return this.http.post<Movie>(`${environment.apiUrl}/Movie/favorite/${id}`, {});
  }

  removeFromFavorites(id: string): Observable<Movie> {
    return this.http.delete<Movie>(`${environment.apiUrl}/Movie/favorite/${id}`);
  }

  getWatchLater(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/Movie/watchLater`);
  }

  addToWatchLater(id: string): Observable<Movie> {
    return this.http.post<Movie>(`${environment.apiUrl}/Movie/watchLater/${id}`, {});
  }

  removeFromWatchLater(id: string): Observable<Movie> {
    return this.http.delete<Movie>(`${environment.apiUrl}/Movie/watchLater/${id}`);
  }

  addReview(dto: ReviewMovie): Observable<any> {
    console.log("DTO",dto);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${environment.apiUrl}/Review`, dto, {headers});
  }

  deleteReview(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/Review/${id}`);
  }
}
