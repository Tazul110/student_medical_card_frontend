import { Component, OnInit } from '@angular/core';
import { Student } from '../../../Models/student.model';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

 students : Student[]=[];
constructor(private studentService: StudentService, private router: Router){}


ngOnInit(): void {
 
  this.studentService.getAllStudent()
    .subscribe({
     next:(students)=>{
       this.students=students;
       console.log(students);
     }
    }) 
}
}
