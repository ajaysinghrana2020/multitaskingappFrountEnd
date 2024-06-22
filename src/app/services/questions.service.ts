import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


    private baseurl = "http://localhost:8080/";
    constructor(private http:HttpClient) { }
  
    public getQuestion(id:any){
      return this.http.get(`${this.baseurl}question/quiz/${id}`)
    }
  
    public deleteQuestion(id:any){
      return this.http.delete(`${this.baseurl}question/${id}`)
    }
  
    public addQuestion(data:any): Observable<object>{
      return this.http.post((`${this.baseurl}question/`),data);
    }
  
}
