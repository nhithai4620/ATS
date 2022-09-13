import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const RegisterRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(RegisterRoutes),
  ]
})
export class RegisterModule { }
