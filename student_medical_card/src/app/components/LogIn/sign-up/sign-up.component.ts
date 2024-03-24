import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../Models/student.model';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router'; // Import Router from @angular/router
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = {
    userEmail: '',
    userPassword: '',
    userName:''
  };

  @ViewChild('userForm') userForm!: NgForm;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
      
  }

  onSignUp() {
    this.studentService.saveUser(this.user)
    .subscribe({
      next: (student) => {

        this.userForm.resetForm();
        alert("sign up successfully");
      }
    });
  }
}
