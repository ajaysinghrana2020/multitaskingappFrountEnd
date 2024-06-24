import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-instructionpage',
  templateUrl: './instructionpage.component.html',
  styleUrls: ['./instructionpage.component.css']
})
export class InstructionpageComponent implements OnInit{
  quizid:any;
  datalist:any;
  constructor(private route:ActivatedRoute,private quizservice:QuizzService){}
  ngOnInit(): void {
    this.quizid=this.route.snapshot.params['qid'];
    console.log(this.quizid);

    this.quizservice.getQuiz(this.quizid).subscribe(data=>{
      this.datalist=data;
      console.log(data);
    },(error)=>{
      console.log("nodata ");
    })
  }

}
