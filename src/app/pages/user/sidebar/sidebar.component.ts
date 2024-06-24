import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  catagoryz:any;
  constructor(private catagory:CategoryService){

  }
  ngOnInit(): void {
    this.catagory.getCatagoryes().subscribe(data=>{
      this.catagoryz=data;
      console.log("able to fetch catagorydata");
    },(error)=>{
      console.log("not able to fetch data");
    })

  }

}
