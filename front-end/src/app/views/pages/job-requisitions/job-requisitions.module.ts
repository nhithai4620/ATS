import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRequisitionsComponent } from './job-requisitions.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AddRequisitionComponent } from './add-requisition/add-requisition.component';

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
  ],
  exports: [JobRequisitionsComponent],
})
export class JobRequisitionsModule {}
