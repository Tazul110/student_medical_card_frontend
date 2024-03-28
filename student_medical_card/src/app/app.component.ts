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

  // studentId!: number;
  // studentById: any = null; // Initialize studentById to null

  constructor(public router: Router) {}
  // constructor(private studentService: StudentService,public router: Router) {}


  onLogout() {
   
    localStorage.removeItem('angular17token');
    this.router.navigate(['/login']);
  }


  // isLoggedIn(): boolean {
   
  //   return localStorage.getItem('angular17token') !== null;
  // }

 

  //@ViewChild('searchForm') searchForm!: NgForm;

  
//   search() {
//     console.log("Search called");
//     console.log(this.studentId);
//     // Reset studentById before each search
//     this.studentById = null;
    
//     // Check if there is a studentId provided
//     if (this.studentId !== null && this.studentId !== undefined) {
//       // If studentId is provided, perform search
//       this.studentService.getStudentById(this.studentId)
//         .subscribe(
//           student => {
//             if (student) {
//               this.studentById = student;
//             } else {
//               alert("Student not found");
//             }
//           },
//           error => {
//             alert("Error: " + error); // Display error message
//           }
//         );
//     } else {
//       // If no studentId is provided, perform a different type of search or provide feedback accordingly
//       console.log("No student ID provided, perform alternative search or provide feedback");
//       // Add your logic here for handling search without a studentId
//     }
// }

}
