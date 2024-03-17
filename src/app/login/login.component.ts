import { Component } from '@angular/core';
// import { Users } from '../Users';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import { error } from 'console';
import Swal from 'sweetalert2'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginservice:LoginService){}
  
  public loginDetails={
    username:'',
    password:''
    };
  
    formSubmit(){
      if(this.loginDetails.username.trim()==''||this.loginDetails.password==''){
        alert("username or password required");
        return;
      }
      
      this.loginservice.generateToken(this.loginDetails).subscribe(
        (data:any)=>{

        },
        (error:any)=>{
          console.log("Error");
          console.log(error);
        }
      )
    }
    
}
