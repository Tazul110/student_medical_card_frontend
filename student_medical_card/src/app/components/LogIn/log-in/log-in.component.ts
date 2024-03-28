import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { User } from '../../../Models/student.model';
import { Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'] 
})
export class LogInComponent {
  
  user: User = {
    userEmail: '',
    userPassword: '',
    userName:''
  };


  constructor(private studentService:StudentService, private renderer: Renderer2, private el: ElementRef,private router: Router) { }

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector('.container');
    const registerBtn = this.el.nativeElement.querySelector('#register');
    const loginBtn = this.el.nativeElement.querySelector('#login');

    registerBtn.addEventListener('click', () => {
      this.renderer.addClass(container, 'active');
    });

    loginBtn.addEventListener('click', () => {
      this.renderer.removeClass(container, 'active');
    });
  }

  onLogin() {
     //console.log(this.user.userEmail);
     //console.log(this.user.userPassword);
   
    this.studentService.onLoginServ(this.user)
      .subscribe(
        student => {
          if (student) {
            //console.log(student.userName);
            alert("Logged In successfully....");
            //localStorage.setItem('angular17token', student.token)
            localStorage.setItem('angular17token', JSON.stringify(student));
            
            this.router.navigate(['/home']);
            
          } else {
            alert("Not Found");
          }
        },
        error => {
          alert("Try Again... Invalid Email or Invalid password");
        }
      );
  }

  @ViewChild('userForm') userForm!: NgForm;

  onSignUp() {
    if(this.user.userName&&this.user.userEmail&&this.user.userPassword)
    {this.studentService.saveUser(this.user)
    .subscribe({
      next: (student) => {

        this.userForm.resetForm();
        alert("sign up successfully");
      }
    });
  }
  else
  {
    alert("Something error...Try again");
  }
}

  // Function to toggle between sign-in and sign-up forms
  // toggleSignForm(form: string) {
  //   const container = document.getElementById('container') as HTMLElement;
  //   if (form === 'sign-in') {
  //     container.classList.remove('active');
  //   } else {
  //     container.classList.add('active');
  //   }
  // }
  
  
}
