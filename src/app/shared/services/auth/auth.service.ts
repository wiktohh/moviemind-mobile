import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private userSubject = new BehaviorSubject<any | null>(null);
  
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  token$ = this.tokenSubject.asObservable();
  user$ = this.userSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) { }

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:5074/api/User/signin', user).pipe(
      tap((res: any) => {
        console.log(res);
        this.tokenSubject.next(res.accessToken);
        this.getLoggedUser(res.accessToken).subscribe((user: any) => {
          this.isAuthenticatedSubject.next(true);
          this.userSubject.next(user);
          console.log('User logged in:', user);
          this.router.navigate(['/tabs/home']);
        });
      })
    );
  }

  register(user: { login: string; email: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:5074/api/User/signup', user, {
      responseType: 'text'
    });
  }

  getLoggedUser(token: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
  
    console.log('Token:', `Bearer ${token}`);
  
    return this.http.get('http://localhost:5074/api/User/me', { headers });
  }

  continueAsGuest(){
    this.isAuthenticatedSubject.next(true);
    this.userSubject.next(null);
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.userSubject.next(null);
    this.router.navigate(['/login']);
    console.log('User logged out');
  }


}
