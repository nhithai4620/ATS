import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import CalculateDate from 'app/shared/utils/caculate-date';
import ValidationMatching from 'app/shared/utils/vadidation-matching';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss'],
})
export class AddCandidateComponent implements OnInit {
  actionBtn: string = 'Add';
  submitted: boolean = false;
  addCandidateForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addCandidateForm = this.fb.group({
      candidateInformation: this.fb.group({
        resume: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        jobTittle: [''],
        bio: [''],
        skill: [''],
        experience: [''],
        desiredSalary: [''],
        workingHoursPerWeek: [''],
      }),
      contactInformation: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.pattern('[- +()0-9]+')]],
        address: [''],
        postcode: [''],
        suburb: [''],
        city: [''],
        country: [''],
      }),
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addCandidateForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addCandidateForm.invalid) {
      return;
    } else {
      console.log(this.addCandidateForm.value);
    }
  }
}
