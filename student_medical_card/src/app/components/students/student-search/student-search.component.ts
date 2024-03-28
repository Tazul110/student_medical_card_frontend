import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  studentId: number | null = null; // Declare studentId property
  studentById: any = null;

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Read studentId from query parameters when component initializes
    this.route.queryParams.subscribe(params => {
      this.studentId = +params['studentId'] || null;
      if (this.studentId) {
        this.search();
      }
    });
  }

  @ViewChild('searchForm') searchForm!: NgForm;
  search() {
    console.log("in S-search class")
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
          }
        );
    } else {
      alert("Please enter a student ID"); // Provide feedback if no student ID is entered
    }
  }

  
  addMedicine(prescriptionId: number) {
    // Implement your logic here for adding medicine
    console.log('Add medicine button clicked for prescription ID:', prescriptionId);
    if (prescriptionId) {
      
      // Navigate to '/sea' with studentId as a query parameter
      this.router.navigate(['/medicine'], { queryParams: { prescriptionId: prescriptionId }});
    } else {
      alert("Please enter a prescriptionId"); // Provide feedback if no student ID is entered
    }
  }

  addPrescription(id:number)
  {
    
    if (id) {
      
      // Navigate to '/sea' with studentId as a query parameter
      this.router.navigate(['/prescription'], { queryParams: { s_Id: id }});
      
    } else {
      alert("Somethings error"); // Provide feedback if no student ID is entered
    }
  }
}