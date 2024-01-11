import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseurl="http://localhost:8080/user/add"
  constructor(private http:HttpClient) { }
}
