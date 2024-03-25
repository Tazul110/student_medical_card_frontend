import { Component } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { User } from '../../../Models/student.model';
import { Router } from '@angular/router'; // Import Router from @angular/router

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'] // Fix the property name to styleUrls
})
export class LogInComponent {
  
  user: User = {
    userEmail: '',
    userPassword: '',
    userName:''
  };

  constructor(private studentService: StudentService, private router: Router) {}

  onLogin() {
    
    console.log(this.user.userEmail);
    console.log(this.user.userPassword);

    this.studentService.onLoginServ(this.user)
      .subscribe(
        student => {
          console.log(student);
          if (student) {
            alert("Loged In successfully....");
            localStorage.setItem('angular17token',student.token)
            // Redirect to '/home' if login successful
            this.router.navigate(['/allstudent']);
          } else {
            alert("Not Found");
          }
        },
        error => {
          alert("Try Again... Invalid Email or Invalid password");
        }
      );
  }

}
