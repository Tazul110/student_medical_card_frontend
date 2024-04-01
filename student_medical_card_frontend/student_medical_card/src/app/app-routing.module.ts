import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { StudentRegistrationComponent } from './components/students/student-registration/student-registration.component';
import { UserResistrationComponent } from './components/users/user-resistration/user-resistration.component';
import { StudentSearchComponent } from './components/students/student-search/student-search.component';
import { LogInComponent } from './components/LogIn/log-in/log-in.component';
import { AddPrescriptionComponent } from './components/Doctor/add-prescription/add-prescription.component';
import { AddMedicineComponent } from './components/Doctor/add-medicine/add-medicine.component';
import { StudentImageComponent } from './components/students/student-image/student-image.component';


export const routes: Routes = [

  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'sRegistration',
    component: StudentRegistrationComponent
  },
  {
    path: 'us',
    component: UserResistrationComponent
  },
  {

    path: 'allstudent',
    component: StudentListComponent
  },
  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'sea',
    component: StudentSearchComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'prescription',
    component: AddPrescriptionComponent
  },
  {
    path: 'medicine',
    component: AddMedicineComponent
  },
  {
    path: 'simage',
    component: StudentImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
