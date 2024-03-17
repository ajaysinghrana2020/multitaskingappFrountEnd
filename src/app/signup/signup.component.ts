import { Component } from '@angular/core';
import { Console } from 'console';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private loginServiceService:LoginServiceService){}

  public user={
    username:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:''
  }
  ngOnInit():void{}
  formSubmit(){
    if(this.user.username=='' || this.user.password==''|| this.user.email==''){
      alert('User is required');
      return;
    }
  this.loginServiceService.addUser(this.user).subscribe(
    (data)=>{
      //success
      console.log(data);
      alert('success');
    },
    (error)=>{
      //error
      console.log(error);
      alert("something went wrong");
    }
  )
}
}