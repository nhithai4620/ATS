import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-requisition',
  templateUrl: './add-requisition.component.html',
  styleUrls: ['./add-requisition.component.scss'],
})
export class AddRequisitionComponent implements OnInit {
  actionBtn: string = 'Add';
  submitted: boolean = false;
  AddJobRequisitionForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.AddJobRequisitionForm = this.fb.group({
      jobDetails: this.fb.group({
        jobTittle: ['', [Validators.required]],
        jobType: ['', [Validators.required]],
        jobCategories: ['', [Validators.required]],
        jobDescriptions: ['', [Validators.required]],
        jobRequirements: ['', [Validators.required]],
        benefits: [''],
        experience: [''],
      }),
      salary: this.fb.group({
        minSalary: ['', [Validators.required]],
        maxSalary: ['', [Validators.required]],
      }),
      assignedRecruiter: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.AddJobRequisitionForm.controls;
  }
}
