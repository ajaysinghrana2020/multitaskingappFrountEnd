import { Component } from '@angular/core';
import { Users } from '../Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:Users=new Users();
  

}
