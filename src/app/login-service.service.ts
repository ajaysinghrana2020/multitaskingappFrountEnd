import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseurl="http://localhost:8080/user/add"
  constructor(private http:HttpClient) { }
  loginUser(user:Users):Observable<object>{
    return this.http.post(`${this.baseurl}`,user);
  }
}
