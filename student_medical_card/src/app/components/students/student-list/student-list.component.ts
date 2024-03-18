import { Component, OnInit } from '@angular/core';
import { Student } from '../../../Models/student.model';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

 students : Student[]=[];
constructor(private studentService: StudentService){}

 ngOnInit(): void {
//   this.getAllStudent();
//  }
//  getAllStudent(){
   this.studentService.getAllStudent()
     .subscribe({
      next:(students)=>{
        this.students=students;
        console.log(students);
      }
     })
 }
  
}
