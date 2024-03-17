import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseurl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  generateToken(loginData: any): Observable<object> {
    return this.http.post(`${this.baseurl}generate-token`, loginData);
  }
  //login user:set token in local storage
  loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  //is login : user is login or not 
  public isLoginIn() {
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    else {
      return true;
    }
  }

  //logout a user 

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  // getting token 
  public getToken() {
    return localStorage.getItem('token');
  }

  // set userdetails

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get userrole
  getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

  //get user details
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr !== null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }
}




