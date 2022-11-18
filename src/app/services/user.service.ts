import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any>{
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }

  login(login: Login): Observable<any>{
    return this.http.post(`${this.baseUrl}/auth/login`, login);
  }

  forgetPassword(email: string): Observable<any>{
    return this.http.post(`${this.baseUrl}/auth/forgetPassword?email=${email}`, null);
  }

  getUserDetails(): Observable<any>{
    return this.http.get(`${this.baseUrl}/auth/getUserProfile`);
  }
}
