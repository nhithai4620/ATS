import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import CalculateDate from 'app/shared/utils/caculate-date';
import ValidationMatching from 'app/shared/utils/vadidation-matching';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  submitted = false;

  profileForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private us: UserService
    ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.minLength(6)]],
        conpassword: ['', [Validators.minLength(6)]],
        phone: ['', [Validators.pattern('[- +()0-9]+')]],
        firstName: ['',[Validators.required]],
        lastName: ['',[Validators.required]],
        jobTittle: [''],
        dob: [''],
      },
      {
        validators: [
          ValidationMatching.match('password', 'conpassword'),
          CalculateDate.age('dob'),
        ],
      }
    );
    
    this.us.getProfile();
    this.us.profile$.subscribe(
      (data)=>{
        console.log(data)
        this.profileForm.patchValue({
          firstName : data!.firstName,
          lastName : data!.lastName,
          email : data.email,
          jobTittle : data!.jobTittle,
          phone: data.phone,
          dob : data.dob
        })
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    } else {
      delete this.profileForm.value.conpassword;
      this.submitted = false;
      this.us.updateProfile(this.profileForm.value);
    }
  }
}
