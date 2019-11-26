import { Injectable } from '@angular/core';
import { BatchBox } from './models/batchbox';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  
  public baseNumber: number = 0;
  public activeBatchBox: BehaviorSubject<BatchBox> = new BehaviorSubject(undefined);
  public batchBox: BatchBox;
  constructor() {
    this.batchBox = {
      firebox: { width: 0, height: 0, depthMax: 0, depthMin: 0 },
      riser: { diameter: 0, minHeight: 0, maxHeight: 0, CSA: 0, oneFourthCSA: 0 },
      port: { depth: 50, width: 0, height: 0 },
      channel: { height: 0, width: 0, overhang: 0, CSA: 0 },
      primary: { CSA: 0, height: 0, width: 0 }
    };
    this.activeBatchBox.next(this.batchBox);
  }
  
  public setBaseNumbers(value: number) {
    this.baseNumber = ((72.34 / 100) * value);
    this.batchBox.riser.diameter = value;
  }
  calculate() {
    this.setRiserDimensions();
    this.setBoxDimensions();
    this.setPortDimensions();
    this.setChannelDimensions();
    this.setPrimaryAirDimensions();
    this.activeBatchBox.next(this.batchBox);
  }
  setRiserDimensions() {
    const radius = (this.batchBox.riser.diameter / 2);
    this.batchBox.riser.CSA = 3.14 * (radius * radius);
    this.batchBox.riser.oneFourthCSA = 0.25 * this.batchBox.riser.CSA;
    this.batchBox.riser.minHeight = 8 * this.baseNumber;
    this.batchBox.riser.maxHeight = 10 * this.baseNumber;
  }
  setBoxDimensions() {
    this.batchBox.firebox.width = this.baseNumber * 2;
    this.batchBox.firebox.height = this.baseNumber * 3;
    this.batchBox.firebox.depthMin = this.baseNumber * 4;
    this.batchBox.firebox.depthMax = this.baseNumber * 5.5;
  }
  setPortDimensions() {
    this.batchBox.port.height = this.baseNumber * 2.2;
    this.batchBox.port.width = this.baseNumber * 0.5;
  }
  setChannelDimensions() {
    this.batchBox.channel.CSA = 0.05 * this.batchBox.riser.CSA;
    this.batchBox.channel.height = this.batchBox.channel.CSA / this.batchBox.port.width;
    // p-channel width = port width
    this.batchBox.channel.width = this.batchBox.port.width;
    // p-channel overhang = p-channel height
    this.batchBox.channel.overhang = this.batchBox.channel.height;
  }

  setPrimaryAirDimensions() {    
    this.batchBox.primary.CSA = 0.2 * this.batchBox.riser.CSA;
    this.batchBox.primary.height = Math.sqrt(this.batchBox.riser.CSA);
    // primary air width = port width
    this.batchBox.primary.width = this.batchBox.port.width;
  }

}
