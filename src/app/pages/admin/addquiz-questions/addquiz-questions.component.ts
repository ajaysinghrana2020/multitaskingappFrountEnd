import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-addquiz-questions',
  templateUrl: './addquiz-questions.component.html',
  styleUrls: ['./addquiz-questions.component.css']
})
export class AddquizQuestionsComponent implements OnInit {
  
  qId:any;
  qTitle:any;
  question:any={
    quiz:{

    },
    image:'img.png',
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  };

  constructor(private route:ActivatedRoute,private questions:QuestionsService){}

  ngOnInit(): void {
    this.qId=this.route.snapshot.params['id'];
    this.qTitle=this.route.snapshot.params['title'];
    this.question.quiz['qid']=this.qId;
  }
  addQuestion(){
    if(this.question.content==null){
      console.log("nodata comming ");
    }
    else{

      this.questions.addQuestion(this.question).subscribe(data=>{
        console.log("able to add question to db");
      },(error)=>{
        console.log("not able to add question to db");
      })

    }
  }
}
