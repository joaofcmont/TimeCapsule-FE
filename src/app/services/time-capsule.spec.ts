import { TestBed } from '@angular/core/testing';

import { TimeCapsule } from './time-capsule';

describe('TimeCapsule', () => {
  let service: TimeCapsule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeCapsule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
