import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const RegisterRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RegisterRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
