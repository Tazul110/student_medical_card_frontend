import { Component } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { User } from '../../../Models/student.model';

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

  // Consider removing loginObj if not used

  constructor(private studentService: StudentService) {}

  onLogin() {
    console.log(this.user.userEmail);
    console.log(this.user.userPassword);
    //debugger;
    this.studentService.onLoginServ(this.user)
      .subscribe(
        student => {
          console.log(student);
          if (student) {
            // Use loginObj if needed
          } else {
            alert("Not Found");
          }
        },
        error => {
          // console.error("Error occurred:", error);
          alert("Try Again... Invalid Email or Invalid password");
        }
      );
  }
}
