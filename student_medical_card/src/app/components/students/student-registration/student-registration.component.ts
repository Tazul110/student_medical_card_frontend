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
export class StudentRegistrationComponent {
  [x: string]: any;
  file: File | null = null;
  studentCode: any = null;
  response: any = null;
  sRegistration: Student =
    {
      s_Id: 0,
      s_Name: '',
      s_Dept: '',
      s_Gender: '',
      s_Email: '',
      b_Date: new Date()
    };

  @ViewChild('studentForm') studentForm!: NgForm;

  constructor(private studentService: StudentService, private router: Router) { }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0] as File;
    }
  }

  saveStudentAndUploadImage() {
    // Call the function to save student data
    this.saveStudent();
    // Call the function to upload image
    this.uploadImage();
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

  uploadImage(): void {
    this.studentCode = this.sRegistration.s_Id

    console.log("in Uploading Image page");
    if (this.file && this.studentCode) {
      this.studentService.uploadImage(this.file, this.studentCode).subscribe(
        (response) => {
          this.response = response;
          console.log('Upload Successful');
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
    } else {
      console.error('File or student code is missing');
    }
  }

}