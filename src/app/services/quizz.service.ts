import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private baseurl = "http://localhost:8080/";
  constructor(private http:HttpClient) { }

  public getQuiz(){
    return this.http.get(`${this.baseurl}quiz/`)
  }

  public deleteQuiz(id:any){
    return this.http.delete(`${this.baseurl}quiz/${id}`)
  }

  public addQuizz(data:any): Observable<object>{
    return this.http.post((`${this.baseurl}quiz/`),data);
  }
}
