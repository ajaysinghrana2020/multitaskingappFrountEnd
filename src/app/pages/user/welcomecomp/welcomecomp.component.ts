import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-welcomecomp',
  templateUrl: './welcomecomp.component.html',
  styleUrls: ['./welcomecomp.component.css']
})
export class WelcomecompComponent implements OnInit {
  catoId: any;
  quizzList: any;
  constructor(private route: ActivatedRoute, private quiz: QuizzService) { }
  ngOnInit(): void {

    this.route.params.subscribe((params => {
      this.catoId = this.route.snapshot.params['catId'];
      if (this.catoId == 0) {
        console.log("alll");
        this.quiz.getQuizes().subscribe(data => {
          this.quizzList = data;
          console.log("able to get all quizes" + this.quizzList);
        }, (error) => {
          console.log("not able to get all quizes");
        })
      }
      else {
        console.log("load speific");
        this.quiz.getQuizForCatagoryId(this.catoId).subscribe(dataa=>{
          console.log("able to get Quizfor catagory");
          this.quizzList=[];
          this.quizzList=dataa;
        },(error)=>{
          console.log("not able to get Quizfor Catagory");
        });
      }
    }));

  }
  
}
