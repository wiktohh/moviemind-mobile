import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    name: 'John Doe',
    email: "johndoe@gmail.com",
    login: 'johndoe',
  }

  isAuthenticated = false;

  constructor() { }

  getUserData() {
    return this.user;
  }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }
}
