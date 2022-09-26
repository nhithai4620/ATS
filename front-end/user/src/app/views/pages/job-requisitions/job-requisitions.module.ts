import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRequisitionsComponent } from './job-requisitions.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AddRequisitionComponent } from './add-requisition/add-requisition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const JobRequisitionsRoutes: Routes = [
  {
    path: '',
    component: JobRequisitionsComponent,
  },
];

@NgModule({
  declarations: [JobRequisitionsComponent, AddRequisitionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(JobRequisitionsRoutes),
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [JobRequisitionsComponent],
})
export class JobRequisitionsModule {}
