import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {
  studentId!: number;
  studentById: any = null; // Initialize studentById to null

  @ViewChild('searchForm') searchForm!: NgForm;

  constructor(private studentService: StudentService, private router: Router) {}

  search() {

//     const loggedInStudent = localStorage.getItem('angular17token');
// if (loggedInStudent) {
//   const student = JSON.parse(loggedInStudent);
//   console.log(student.userName);
// }
  
    this.studentById = null; // Reset studentById before each search
    if (this.studentId) {
      this.studentService.getStudentById(this.studentId)
        .subscribe(
          student => {
            if (student) {
              this.studentById = student;
              this.searchForm.resetForm();
            } else {
              alert("Not Found");
            }
          },
          error => {
            alert("Student not found");
            this.searchForm.resetForm();
          }
        );
    } else {
      alert("Please enter a student ID"); // Provide feedback if no student ID is entered
    }
  }
}
