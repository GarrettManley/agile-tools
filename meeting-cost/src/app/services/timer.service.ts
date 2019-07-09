import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  startTime: Date;
  endTime: Date;

  constructor() {
    this.reset();
  }

  public start() {
    this.startTime = this.startTime || new Date();
  }

  public stop() {
    if (this.startTime === null) {
      return;
    } else {
      this.endTime = new Date();
    }
  }

  public reset() {
    this.startTime = null;
    this.endTime = null;
  }
}
