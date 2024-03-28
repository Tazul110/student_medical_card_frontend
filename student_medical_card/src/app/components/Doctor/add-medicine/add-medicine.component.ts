import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../../../Models/Medicine.Model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css'] // Use styleUrls instead of styleUrl
})
export class AddMedicineComponent implements OnInit {
  p1_Id: number | null = null; // Declare prescriptionId property

  mRegistration: Medicine =
    {
      p_Id: 0,
      m_Name: '',
      m_Type: '',
      consumption_Rule: '',
      m_Days: 0,
    };

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.p1_Id = +params['prescriptionId'] || null;

    });
  }


  @ViewChild('medicinetForm') medicinetForm!: NgForm;
  addMedicine() {

    if (!this.p1_Id) {
      console.error('Prescription ID is not available.');
      return;
    }
    if (this.mRegistration.consumption_Rule && this.mRegistration.m_Days && this.mRegistration.m_Name && this.mRegistration.m_Type) {
      this.mRegistration.p_Id = this.p1_Id;
      this.studentService.saveMedicine(this.mRegistration)
        .subscribe({
          next: (medicine) => {
            alert("medicine registration successful");
            this.medicinetForm.resetForm();
          }
        });
    }
    else {
      alert("Somthings error...");
    }
  }
}
