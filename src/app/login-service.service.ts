import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseurl="http://localhost:8080/user/add"
  constructor(private http:HttpClient) { }
  addUser(user:any):Observable<object>{
    return this.http.post(`${this.baseurl}/user`,user);
  }
}
