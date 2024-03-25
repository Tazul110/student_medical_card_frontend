import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student_medical_card';


  constructor(private router: Router) {}

  onLogout() {
    console.log("Log Out");
    localStorage.removeItem('angular17token');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }
}
