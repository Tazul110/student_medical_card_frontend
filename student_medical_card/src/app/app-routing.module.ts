import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { StudentRegistrationComponent } from './components/students/student-registration/student-registration.component';
import { UserResistrationComponent } from './components/users/user-resistration/user-resistration.component';
import { StudentSearchComponent } from './components/students/student-search/student-search.component';
import { LogInComponent } from './components/LogIn/log-in/log-in.component';
import { SignUpComponent } from './components/LogIn/sign-up/sign-up.component';


export const routes: Routes = [

{
  path:'home',
  component:HomePageComponent
},
{
  path:'sRegistration',
  component:StudentRegistrationComponent
},
{
  path:'us',
  component:UserResistrationComponent
},
{
  
  path:'allstudent',
  component:StudentListComponent
},
{
  path: '',
  component:LogInComponent
},
{
  path:'sea',
  component:StudentSearchComponent
},
{
  path:'login',
  component:LogInComponent
},
{
  path:'signup',
  component:SignUpComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
