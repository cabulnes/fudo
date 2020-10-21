import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular-jwt';


@Injectable() 
export class AuthService {
  authToken: any;
  user: any;
  isDev: boolean; 

  constructor(private http: HttpClient) {
      this.isDev = false;  // Change to false before deployment
      }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
     .pipe(map(res => res));
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
      .pipe(map(res => res));
  }

  getProfile() {
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/users/profile', {headers: headers})
      .pipe(map(res => res));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

 
}