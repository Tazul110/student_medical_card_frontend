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

  getAllStudent(): Observable<Student[]>{
    return this.http.get<any>(`${this.baseApiUrl}/api/GetAll_Students`).pipe(
      map(response => response.listStudent)
    );
  }
}
