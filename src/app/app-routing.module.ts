import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  // {path:'',component:LoginComponent},
  {path:'notes/:id',component:NotesComponent},
  {path:'',component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
