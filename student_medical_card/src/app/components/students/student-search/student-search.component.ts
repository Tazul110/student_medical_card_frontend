import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  studentId!: number;
  studentById: any = null; // Initialize studentById to null

  @ViewChild('searchForm') searchForm!: NgForm;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('angular17token') ?? '';
    if (!token) {
      this.router.navigate(['/login']);
    }
  }

  search() {
    this.studentById = null; // Reset studentById before each search
    if (this.studentId) {
      this.studentService.getStudentById(this.studentId)
        .subscribe(
          student => {
            if (student) {
              this.studentById = student;
            } else {
              alert("Not Found");
            }
          },
          error => {
            alert("Student not found");
          }
        );
    } else {
      alert("Please enter a student ID"); // Provide feedback if no student ID is entered
    }
  }
}
