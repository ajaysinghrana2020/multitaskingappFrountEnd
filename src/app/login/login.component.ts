import { Component } from '@angular/core';
import { Users } from '../Users';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginType="loginn";
  change(){
    if(this.loginType=="signupp")
    {
      this.loginType="loginn";
      console.log(this.loginType);
    }
    else{
      this.loginType="signupp";
      console.log(this.loginType);
    }
  }
  user:Users=new Users();
  constructor(private loginService:LoginServiceService,private router:Router){}
  
userlogin(){
  this.loginService.loginUser(this.user).subscribe(data=>{
    alert("sucess");
  },error=>alert("not able to login"));
}
}
