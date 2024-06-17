import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  quizzz:any;

  constructor(private quiz:QuizzService){}
  ngOnInit(): void { 
    this.quiz.getQuiz().subscribe((data:any)=>{
      this.quizzz=data;
      console.log("data form quizz"+this.quizzz);
    },(error)=>{
      console.warn("server error");
    });
  }


  
}
