import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { HomePageComponent } from './components/Home/home-page/home-page.component';

const routes: Routes = [
{
  path: '',
  component:StudentListComponent
},
{
  path:'home',
  component:HomePageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
