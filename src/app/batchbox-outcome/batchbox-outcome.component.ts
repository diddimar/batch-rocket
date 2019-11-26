import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalcService } from '../calc.service';
import { BatchBox } from '../models/batchbox';

@Component({
  selector: 'batchbox-outcome',
  templateUrl: './batchbox-outcome.component.html',
  styleUrls: ['./batchbox-outcome.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BatchboxOutcomeComponent implements OnInit {
  
  public batchBox: BatchBox;
  constructor(
    public calc: CalcService
  ) {
    this.calc.activeBatchBox.subscribe(val => {
      this.batchBox = val;
    });
  }

  ngOnInit() {
    this.rangeChange(50);
  }

  rangeChange(value: number) {
    this.calc.setBaseNumbers(value);
    this.calc.calculate();
  }

}
