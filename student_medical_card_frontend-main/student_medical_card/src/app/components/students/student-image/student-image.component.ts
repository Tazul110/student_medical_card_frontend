import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-image',
  templateUrl: './student-image.component.html',
  //styleUrl: './student-image.component.css'
  styleUrls: ['./student-image.component.css']
})
export class StudentImageComponent {
  file: File | null = null;
  studentCode: string = '';
  response: any = null;
  studentImageUrl: any = '';
  image: string = '';


  constructor(private studentService: StudentService) { }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0] as File;
    }
  }

  uploadImage(): void {
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

  searchImage(): void {
    if (this.studentCode) {
      console.log(this.studentCode);
      this.studentService.getImage(this.studentCode)
        .subscribe(
          imageUrl => {
            if (imageUrl !== 'Not Found') {
              this.studentImageUrl = imageUrl;
              console.log('Image URL:', this.studentImageUrl.image);
            } else {
              console.error('Image not found for student code:', this.studentCode);
            }
          },
          error => {
            console.error('Error fetching image URL:', error);
          }
        );
    } else {
      console.error('Please provide a student code.');
    }
  }
}