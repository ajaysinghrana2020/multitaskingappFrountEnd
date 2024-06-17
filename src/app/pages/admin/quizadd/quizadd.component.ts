import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizzService } from 'src/app/services/quizz.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-quizadd',
  templateUrl: './quizadd.component.html',
  styleUrls: ['./quizadd.component.css']
})
export class QuizaddComponent implements OnInit{
  constructor(private catagory:CategoryService, private quizz:QuizzService){}
  catagorylist:any;
 

  ngOnInit(): void {
    this.catagorylist=this.catagory.getCatagoryes().subscribe((data:any)=>{
      //success
      this.catagorylist=data;
      console.log(this.catagory);
    },(error)=>{console.log("error in getting data faild")});
  }

  public quizzadd:any ={
    "title":"",
    "description": "",
    "maxMarks": "",
    "numberOfQuestions": "",
    "active": 'true',
    "category":{
      "cid": "",
    }
  };

  addQuizz(){
    if(this.quizzadd.title.trim()!=="" && this.quizzadd.description.trim()!==null){
        this.quizz.addQuizz(this.quizzadd).subscribe(data=>{
          console.log("success in adding Quizzz");
        },(error=>{
            console.log("failing in adding Quizzz");
        }))
    }
  }


}
