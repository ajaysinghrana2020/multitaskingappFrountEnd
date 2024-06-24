import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-quizstart',
  templateUrl: './quizstart.component.html',
  styleUrls: ['./quizstart.component.css']
})
export class QuizstartComponent implements OnInit {
  questions:any;
  questionId:any;
  constructor(private route:ActivatedRoute,private ques:QuestionsService,private location: LocationStrategy){}

  preventBack(){
    history.pushState(null, "", window.location.href);  
    this.location.onPopState(() => {
    history.pushState(null, "", window.location.href);
  });}

  ngOnInit(): void {
    this.preventBack();
    this.questionId=this.route.snapshot.params['id'];
    console.log(this.questionId);
    this.ques.getQuestion(this.questionId).subscribe(data=>{
      console.log("able to fetch qiestios");
      this.questions=data;
    },(error)=>{
      console.log("not able to get questions");
    })
  }

}
