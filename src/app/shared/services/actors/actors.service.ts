import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Actor } from '../../models/actors/actor.model';
import { Observable } from 'rxjs';
import { ReviewActor } from '../../models/movies/review.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${environment.apiUrl}/Role`);
  }

  // getActorById(id: string) {
  //   return this.actors.find(actor => actor.id === id);
  // }

  addActorReview(dto: ReviewActor): Observable<any> {
    return this.http.post(`${environment.apiUrl}/RoleReview`, dto);
  }
}
