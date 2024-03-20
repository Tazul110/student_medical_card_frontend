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


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HomePageComponent,
    StudentRegistrationComponent,
    UserResistrationComponent,
    
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
