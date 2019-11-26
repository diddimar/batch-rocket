import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchboxOutcomeComponent } from './batchbox-outcome.component';

describe('BatchboxOutcomeComponent', () => {
  let component: BatchboxOutcomeComponent;
  let fixture: ComponentFixture<BatchboxOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchboxOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchboxOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
