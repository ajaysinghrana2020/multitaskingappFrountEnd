import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseurl = "http://localhost:8080/";
  constructor(private http:HttpClient) { }
  // public categgorys(){
  //   return this.http.get(`${this.baseurl}/categories`)
  // }

  public getCatagoryes(){
    return this.http.get(`${this.baseurl}category/`)
  }

  public deleteCatagory(id:any){
    return this.http.delete(`${this.baseurl}category/${id}`)
  }

  public addCatagory(data:any): Observable<object>{
    return this.http.post((`${this.baseurl}category/`),data);
  }
}
