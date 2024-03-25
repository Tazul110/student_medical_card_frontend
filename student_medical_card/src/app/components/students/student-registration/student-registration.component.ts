import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../../Models/student.model';
import { StudentService } from '../../../services/student.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent implements OnInit{
  [x: string]: any;
    
  sRegistration : Student=
  {
    s_Id: 0,
    s_Name: '',
    s_Dept: '',
    s_Gender: '',
    s_Email: '',
    b_Date:new Date()
  };
  
  @ViewChild('studentForm') studentForm!: NgForm;

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

  saveStudent() {
    this.studentService.saveStudent(this.sRegistration)
      .subscribe({
        next: (student) => {
          alert("Student registration successful");
          this.studentForm.resetForm();
        }
      });
  }
}