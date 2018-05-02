import { TestBed, inject } from '@angular/core/testing';

import { TimelineScrollService } from '../app/infrastructure/timeline-scroll.service';

describe('TimelineScrollService', () => {
  beforeEach(() => {
	TestBed.configureTestingModule({
		providers: [{
			provide: TimelineScrollService,
			useClass: class {
				get = jasmine.createSpy("get");
				post = jasmine.createSpy("post");
			}
		}]
	});
  });

  it('should be created', inject([TimelineScrollService], (service: TimelineScrollService) => {
	expect(service).toBeTruthy();
  }));
});
