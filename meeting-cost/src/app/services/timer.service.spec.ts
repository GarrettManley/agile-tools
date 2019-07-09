import { TestBed } from '@angular/core/testing';

import { TimerService } from './timer.service';

describe('TimerService', () => {
  let service: TimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(TimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('start() - should initialize startTime value', async () => {
    // arrange
    service.start();
    // act
    await sleep(100);
    // assert
    expect(service.startTime).not.toBeNull();
    expect(service.startTime.getTime()).toBeLessThan(new Date().getTime());
  });

  it('stop() - should set endTime value', () => {
    // arrange
    service.start();
    // act
    service.stop();
    // assert
    expect(service.endTime.getTime()).not.toBeNull();
  });

  it('stop() - should not set endTime if it has no startTime', () => {
    // arrange & act
    service.stop();
    // assert
    expect(service.endTime).toBeNull();
  });

  it('reset() - should set start and end times to null', () => {
    // arrange
    service.start();
    service.stop();
    // act
    service.reset();
    // assert
    expect(service.startTime).toBeNull();
    expect(service.endTime).toBeNull();
  });

  it('getElapsedTime() - should have a value after timer runs', async () => {
    // arrange
    service.start();
    // act
    await sleep(100);
    service.stop();
    const elapsed = service.endTime.getTime() - service.startTime.getTime();
    // assert
    expect(elapsed).toBeGreaterThan(100);
  });
});

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}
