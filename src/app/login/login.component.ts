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
  constructor(private loginservice:LoginService, private router:Router){}
  
  public loginDetails={
    username:"",
    password:""
    };
  
    formSubmit(){
      if(this.loginDetails.username.trim()==''||this.loginDetails.password==''){
        alert("username or password required");
        return;
      }
      
      this.loginservice.generateToken(this.loginDetails).subscribe(
        (data:any)=>{
          
        this.loginservice.loginUser(data.token);
        this.loginservice.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginservice.setUser(user);
            console.log(user);
            console.log(this.loginDetails.password);
          console.log(this.loginDetails.username);
            if(this.loginservice.getUserRole()=="ADMIN"){
              // window.location.href='/admin';
              this.router.navigate(['admin']);
              this.loginservice.loginStatusSubject.next(true);
            }
            else if(this.loginservice.getUserRole()=="NORMAL"){
            //  window.location.href='/user-dashboard';
            this.router.navigate(['user-dashboard']);
            this.loginservice.loginStatusSubject.next(true);
            }
            else{
              this.loginservice.logout();
            }
          }
        )
        },
        (error:any)=>{
          console.log("Error");
          console.log(error);
        }
      )
    }
    
}
