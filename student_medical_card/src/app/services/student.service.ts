import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Student } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseApiUrl: string ="https://localhost:7072";
  
  constructor(private http: HttpClient) { }
  
  //constructor(private http: HttpClient, private router: Router) { } //this is use for navigate page 

  getAllStudent(): Observable<Student[]>{
    return this.http.get<any>(`${this.baseApiUrl}/api/GetAll_Students`).pipe(
      map(response => response.listStudent)
    );
  }

  saveStudent(sRegistration: Student): Observable<Student> {
    return this.http.post<Student>(this.baseApiUrl + '/api/s_add/AddStudent', sRegistration);
    
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



  
     
}
