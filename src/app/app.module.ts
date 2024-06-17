import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionsPageComponent } from './landing-page/questions-page/questions-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeadbarComponent } from './headbar/headbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomecomponentComponent } from './pages/admin/welcomecomponent/welcomecomponent.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {DatePipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { QuizaddComponent } from './pages/admin/quizadd/quizadd.component';
import { QuizComponent } from './pages/admin/quiz/quiz.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesComponent,
    LandingPageComponent,
    QuestionsPageComponent,
    HeadbarComponent,
    SignupComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    DashboardComponent,
    WelcomecomponentComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    QuizaddComponent,
    QuizComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatListModule,
    DatePipe,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,

    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
