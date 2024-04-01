import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from '../../../Models/Prescription.Model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrl: './add-prescription.component.css'
})
export class AddPrescriptionComponent implements OnInit {

  s1_Id: number | null = null;
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    // Read studentId from query parameters when component initializes
    this.route.queryParams.subscribe(params => {
      this.s1_Id = +params['s_Id'] || null;
    });
  }

  pRegistration: Prescription =
    {
      s_Id: 0,
      health_condition: '',
      prescribeBy: '',
      prescribe_date_time: new Date()

    };



  @ViewChild('prescriptionForm') prescriptionForm!: NgForm;
  addPrescription() {

    if (!this.s1_Id) {
      console.error('Prescription ID is not available.');
      return;
    }
    const loggedInDoctor = localStorage.getItem('angular17token');
    if (loggedInDoctor) {
      const doctor = JSON.parse(loggedInDoctor);
      this.pRegistration.prescribeBy = doctor.userName;
    }


    if (this.pRegistration.health_condition && this.pRegistration.prescribeBy) {


      this.pRegistration.s_Id = this.s1_Id;
      this.studentService.savePrescription(this.pRegistration)
        .subscribe({
          next: (medicine) => {
            alert("Prescription registration successful");
            this.prescriptionForm.resetForm();

          }
        });
    }
    else {
      alert("Somethings error");
    }
  }
}
