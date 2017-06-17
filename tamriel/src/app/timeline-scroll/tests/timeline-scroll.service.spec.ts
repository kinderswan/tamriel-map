import { TestBed, inject } from '@angular/core/testing';

import { TimelineScrollService } from '../timeline-scroll.service';

describe('TimelineScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineScrollService]
    });
  });

  it('should be created', inject([TimelineScrollService], (service: TimelineScrollService) => {
    expect(service).toBeTruthy();
  }));
});
