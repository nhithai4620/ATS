import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from './candidates.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';

export const CandidatesRoutes: Routes = [
  {
    path: '',
    component: CandidatesComponent,
  },
];

@NgModule({
  declarations: [CandidatesComponent, AddCandidateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CandidatesRoutes),
    MatDialogModule,
  ],
  exports: [CandidatesComponent],
})
export class CandidatesModule {}
