import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Student, User } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseApiUrl: string ="https://localhost:7072";
  router: any;
  
  constructor(private http: HttpClient) { }
  
  //constructor(private http: HttpClient, private router: Router) { } //this is use for navigate page 

  getAllStudent(): Observable<Student[]>{
    return this.http.get<any>(`${this.baseApiUrl}/api/Student/Getall`).pipe(
      map(response => response.listStudent)
    );
  }

  saveStudent(sRegistration: Student): Observable<Student> {
    return this.http.post<Student>(this.baseApiUrl + '/api/Student/AddStudent', sRegistration);
    
  }
                       // for navigate another page//

  // saveStudent(sRegistration: Student): Observable<Student> {
  //   return this.http.post<Student>(this.baseApiUrl + '/api/s_add/AddStudent', sRegistration)
  //     .pipe(
  //       tap(() => {
  //         // Navigate to the current route to reload the page
  //         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //           this.router.navigate([this.router.url]);
  //         });
  //       })
  //     );
  // }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseApiUrl}/api/Student/GetById/${id}`);
  }


  onLoginServ(user: User): Observable<any> {
    //console.log(userCredentials.userEmail);
    return this.http.post<any>(`${this.baseApiUrl}/api/Login`, user);
    
  }


  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseApiUrl + '/api/Login/addUser', user);
    
  }


  
     
}
