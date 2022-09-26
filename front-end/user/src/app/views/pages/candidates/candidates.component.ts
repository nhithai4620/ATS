import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
})
export class CandidatesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addCandidateDialog() {
    this.dialog.open(AddCandidateComponent, {
      width: '600px',
    });
  }
}
