import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student_medical_card';


  constructor(public router: Router) {}


  onLogout() {
   
    localStorage.removeItem('angular17token');
    this.router.navigate(['/login']);
  }


  isLoggedIn(): boolean {
    // Implement your logic here to check if the user is logged in
    // For example, you can check if there is a token in local storage
    return localStorage.getItem('angular17token') !== null;
  }
}
