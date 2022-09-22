import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from './candidates.component';
import { RouterModule, Routes } from '@angular/router';

export const CandidatesRoutes: Routes = [
  {
    path: '',
    component: CandidatesComponent,
  },
];

@NgModule({
  declarations: [CandidatesComponent],
  imports: [CommonModule, RouterModule.forChild(CandidatesRoutes)],
  exports: [CandidatesComponent],
})
export class CandidatesModule {}
