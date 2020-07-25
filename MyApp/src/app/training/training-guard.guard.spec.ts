import { TestBed } from '@angular/core/testing';

import { TrainingGuardGuard } from './training-guard.guard';

describe('TrainingGuardGuard', () => {
  let guard: TrainingGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TrainingGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
