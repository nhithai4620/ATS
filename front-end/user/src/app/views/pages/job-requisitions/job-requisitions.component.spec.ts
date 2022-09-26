import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequisitionsComponent } from './job-requisitions.component';

describe('JobRequisitionsComponent', () => {
  let component: JobRequisitionsComponent;
  let fixture: ComponentFixture<JobRequisitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRequisitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
