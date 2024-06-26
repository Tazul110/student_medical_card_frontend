import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Student, User } from '../Models/student.model';
import { Medicine } from '../Models/Medicine.Model';
import { Prescription } from '../Models/Prescription.Model';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseApiUrl: string = "https://localhost:7072";
  router: any;

  constructor(private http: HttpClient) { }

  //constructor(private http: HttpClient, private router: Router) { } //this is use for navigate page 

  getAllStudent(): Observable<Student[]> {
    return this.http.get<any>(`${this.baseApiUrl}/api/Student/Getall`).pipe(
      map(response => response.listStudent)
    );
  }

  saveStudent(sRegistration: Student): Observable<Student> {
    return this.http.post<Student>(this.baseApiUrl + '/api/Student/AddStudent', sRegistration);

  }


  saveMedicine(mRegistration: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.baseApiUrl + '/api/Prescription/AddMedicine', mRegistration);

  }

  savePrescription(pRegistration: Prescription): Observable<Prescription> {
    return this.http.post<Prescription>(this.baseApiUrl + '/api/Prescription/AddPrescription', pRegistration);

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


  uploadImage(file: File, studentCode: string): Observable<any> {
    if (file && studentCode) {
      const formData = new FormData();
      formData.append('formFile', file);

      return this.http.put(`${this.baseApiUrl}/api/studentImage/UploadImage/${studentCode}`, formData)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Error occurred while uploading image:', error);
            return throwError('Error occurred while uploading image');
          })
        );
    } else {
      console.error('File or student code is missing');
      return throwError('File or student code is missing');
    }
  }

  // https://localhost:7072/api/stusentImage/GetImage/1 
  // https://localhost:7072/api/stusentImage/GetImage/1

  getImage(studentCode: any): Observable<any> {

    return this.http.get<any>(`${this.baseApiUrl}/api/studentImage/GetImage/${studentCode}`);

  }


}