import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRequisitionComponent } from './add-requisition/add-requisition.component';

@Component({
  selector: 'app-job-requisitions',
  templateUrl: './job-requisitions.component.html',
  styleUrls: ['./job-requisitions.component.scss'],
})
export class JobRequisitionsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addJobDialog() {
    this.dialog.open(AddRequisitionComponent, {
      width: '600px',
    });
  }
}
