import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from './candidates.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

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
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [CandidatesComponent],
})
export class CandidatesModule {}
