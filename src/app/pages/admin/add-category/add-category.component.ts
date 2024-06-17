import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  public categorys={
    title:"",
    description:""
  }
  constructor(private category:CategoryService){

  }
  ngOnInit(): void {
    
  }

  addcategory(){
    if(this.categorys.title.trim!==null && this.categorys.description.trim!==null){
      this.category.addCatagory(this.categorys).subscribe(
        (data)=>{
          console.log(data);
          alert("success!!");
        },
        (error)=>{
          console.log("something went wrong");
          alert("server error!!");
        }
      );
    }
    else{
      console.log("title or discription is empty!!");
    }
  }
}
