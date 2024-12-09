import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any = {
    name: 'John Doe',
    email: "johndoe@gmail.com",
    login: 'johndoe',
  }

  isAuthenticated = false;
  isGuest = false;

  constructor(private router: Router) { }

  getUserData() {
    return this.user;
  }

  login() {
    this.isAuthenticated = true;
    this.isGuest = false;
    this.user = {
      name: 'John Doe',
      email: "johndoe@wp.pl",
      login: 'johndoe'
    };
  }

  continueAsGuest(){
    this.isAuthenticated = true;
    this.isGuest = true;
    this.user = null;
  }

  logout() {
    this.isAuthenticated = false;
    this.isGuest = false;
    this.user = null;
    this.router.navigate(['/login']);
    console.log('User logged out');
  }


}
