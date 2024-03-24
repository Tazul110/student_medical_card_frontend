import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { StudentRegistrationComponent } from './components/students/student-registration/student-registration.component';
import { FormsModule } from '@angular/forms';
import { UserResistrationComponent } from './components/users/user-resistration/user-resistration.component';
import { StudentSearchComponent } from './components/students/student-search/student-search.component';
import { LogInComponent } from './components/LogIn/log-in/log-in.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HomePageComponent,
    StudentRegistrationComponent,
    UserResistrationComponent,
    StudentSearchComponent,
    LogInComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
