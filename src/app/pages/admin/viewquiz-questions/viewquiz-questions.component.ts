import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-viewquiz-questions',
  templateUrl: './viewquiz-questions.component.html',
  styleUrls: ['./viewquiz-questions.component.css']
})
export class ViewquizQuestionsComponent implements OnInit {
  qId:any;
  qTitle:any;
  questions:any;
  numb=0;
  i=0;
  constructor(private route:ActivatedRoute,private questionsz:QuestionsService){}
  ngOnInit(): void {
    this.qId=this.route.snapshot.params['id'];
    this.qTitle=this.route.snapshot.params['title'];
    console.log(this.qId,this.qTitle);
    this.questionsz.getQuestion(this.qId).subscribe(data=>{
      console.log("able to fetch questions from db");
      this.questions=data;
    },(error=>{
      console.log("error in fetching questions form db");
    }));
    this.numb=0;
  }
  
  anc():Number{
    this.numb=this.numb+1;
    return this.numb;
  }
 
}
