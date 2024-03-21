import { Component } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrl: './student-search.component.css'
})
export class StudentSearchComponent {
  studentId!: number;
  studentById: any;
  
  constructor(private studentService: StudentService){}

  ngOnInit(): void {
      
  }


  search() {
    if (this.studentId) {
      debugger;
      console.log(this.studentId);
      this.studentService.getStudentById(this.studentId)
        .subscribe(student => {
          console.log(student);
          if (student) {
            this.studentById = student;
            
          } else {
            alert("Not Found");
          }
        },error => {
          
          alert("Student not found");
        });
    }
  }
}  