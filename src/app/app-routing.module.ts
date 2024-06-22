import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomecomponentComponent } from './pages/admin/welcomecomponent/welcomecomponent.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { QuizaddComponent } from './pages/admin/quizadd/quizadd.component';
import { QuizComponent } from './pages/admin/quiz/quiz.component';
import { ViewquizQuestionsComponent } from './pages/admin/viewquiz-questions/viewquiz-questions.component';
import { AddquizQuestionsComponent } from './pages/admin/addquiz-questions/addquiz-questions.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:DashboardComponent,canActivate:[AdminGuard],children:[
    {
    path:'',
    component:WelcomecomponentComponent,
    },
    {
      path:'catagories',
      component:ViewCategoriesComponent,
    },
    {
      path:'addcatagories',
      component:AddCategoryComponent,
    },
    {
      path:'quiz',
      component:QuizComponent,
    },{
      path:'quizadd',
      component:QuizaddComponent,
    },{
      path:'questions/:id/:title',
      component:ViewquizQuestionsComponent,
    },{
      path:'questionsadd/:id/:title',
      component:AddquizQuestionsComponent,
    }
  ]},
  {path:'user-dashboard',component:UserDashboardComponent,canActivate:[NormalGuard]},
  {path:'admin/profile',component:ProfileComponent,canActivate:[AdminGuard]},
  
  // {path:'',component:LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
