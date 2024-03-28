import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { StudentRegistrationComponent } from './components/students/student-registration/student-registration.component';
import { FormsModule } from '@angular/forms';
import { UserResistrationComponent } from './components/users/user-resistration/user-resistration.component';
import { StudentSearchComponent } from './components/students/student-search/student-search.component';
import { LogInComponent } from './components/LogIn/log-in/log-in.component';
import { ExampleComponent } from './components/Home/home-page/example/example.component';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { customInterceptor } from './services/custom.interceptor';
import { AddPrescriptionComponent } from './components/Doctor/add-prescription/add-prescription.component';
import { AddMedicineComponent } from './components/Doctor/add-medicine/add-medicine.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HomePageComponent,
    StudentRegistrationComponent,
    UserResistrationComponent,
    StudentSearchComponent,
    LogInComponent,
    ExampleComponent,
    AddPrescriptionComponent,
    AddMedicineComponent,
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

    providers: [provideRouter(routes),provideHttpClient(withInterceptors([customInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
