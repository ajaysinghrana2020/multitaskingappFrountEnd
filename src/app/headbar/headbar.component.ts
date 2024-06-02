import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css'],
})
export class HeadbarComponent implements OnInit {
  isLoggedIn=false;
user:any="";
  constructor(public login:LoginService){

  
  }
  
  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoginIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoginIn();
      this.user=this.login.getUser();
    });
  }
  public logout(){
    this.login.logout();
    window.location.reload();
    this.isLoggedIn=false;
    this.user=null;
  }

  public showdetails(){

  }

}
