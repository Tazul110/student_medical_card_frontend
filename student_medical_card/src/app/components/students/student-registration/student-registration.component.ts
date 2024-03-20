import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../../Models/student.model';
import { StudentService } from '../../../services/student.service';
import { NgForm } from '@angular/forms';

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
  
  constructor(private studentService: StudentService){}

    ngOnInit(): void {
      
    }

    @ViewChild('employeeForm') employeeForm!: NgForm;
    saveStudent()
      {
        this.studentService.saveStudent(this.sRegistration)
        .subscribe({
          next: (student)=>{
            this.employeeForm.resetForm();
          }
        })
      }

}
