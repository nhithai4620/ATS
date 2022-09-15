import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'app/shared/services/auth.service';
import CalculateDate from 'app/shared/utils/caculate-date';
import ValidationMatching from 'app/shared/utils/vadidation-matching';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  submitted = false;

  genders = ['male', 'female'];

  signupForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        conpassword: ['', [Validators.required, Validators.minLength(6)]],
        phone: ['', [Validators.pattern('[- +()0-9]+')]],
        fullName: [''],
        dob: [''],
        gender: [''],
      },
      {
        validators: [
          ValidationMatching.match('password', 'conpassword'),
          CalculateDate.age('dob'),
        ],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    } else {
      delete this.signupForm.value.conpassword;
      this.submitted = false;
      this.authService.register(this.signupForm.value);
    }
  }
}
