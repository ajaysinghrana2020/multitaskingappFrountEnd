import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import { CategoryService } from 'src/app/services/category.service';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
})
export class ViewCategoriesComponent implements OnInit {
  constructor(private catservice:CategoryService){}
  catagory:any;

  ngOnInit():void{

    this.catservice.getCatagoryes().subscribe((data:any)=>{
      //success
      this.catagory=data;
      console.log(this.catagory);
    },(error)=>{console.log("error in getting data faild")});
  }
  // "title": "Programing Language",
  // "description": "This Quiz Contains Quizz related to Programing Language"
  
}
