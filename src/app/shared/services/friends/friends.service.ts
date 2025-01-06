import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Actor } from '../../models/actors/actor.model';
import { Observable } from 'rxjs';
import { ReviewActor } from '../../models/movies/review.model';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/User/all`);
  }

  getFriends(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/User/friends`);
  }

  getPendingFriends(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/User/requests`);
  }

  rejectFriend(id: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/User/requests/${id}/reject`,
      {}
    );
  }

  acceptFriend(id: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/User/requests/${id}/accept`,
      {}
    );
  }

  addFriend(id: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/User/requests/${id}`, {});
  }
}
