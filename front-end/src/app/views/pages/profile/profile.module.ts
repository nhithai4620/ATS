import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

const ProfileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfileModule { }
