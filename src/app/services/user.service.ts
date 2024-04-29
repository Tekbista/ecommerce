import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Login } from '../models/login';
import { UserProfile } from '../models/user-profile';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:8081/api/v1';
  token = localStorage.getItem("token");

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

  verifyLogin(): Observable<any>{
    const httpHeader = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get(`${this.baseUrl}/auth/verifyLogin`, {headers: httpHeader});
  }


  getUserDetails(): any{
    let userProfile =JSON.parse(localStorage.getItem("userProfile") || "") ;
    return userProfile;
  }

  

  getAllStates(): Observable<any>{
    return this.http.get(`${this.baseUrl}/auth/getStates`);
  }

  updateUserProfile(profile: UserProfile): Observable<any>{
    const httpHeader = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.post(`${this.baseUrl}/auth/updateUserProfile`, profile, {headers: httpHeader})
  }
}
