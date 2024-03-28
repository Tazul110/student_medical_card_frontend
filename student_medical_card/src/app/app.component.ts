import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './services/student.service';
import { NgForm } from '@angular/forms';



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

  studentId!: number;
  
  
   constructor(private studentService: StudentService,public router: Router) {}


  onLogout() {
   
    localStorage.removeItem('angular17token');
    this.router.navigate(['/login']);
  }

  @ViewChild('searchForm') searchForm!: NgForm;
  search() {
    if (this.studentId) {
      
      // Navigate to '/sea' with studentId as a query parameter
      this.router.navigate(['/sea'], { queryParams: { studentId: this.studentId }});
      this.searchForm.resetForm();
    } else {
      alert("Please enter a student ID"); // Provide feedback if no student ID is entered
    }
  }
}