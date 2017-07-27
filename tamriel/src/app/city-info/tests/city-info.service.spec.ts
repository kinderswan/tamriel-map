import { TestBed, inject } from '@angular/core/testing';

import { CityInfoService } from './city-info.service';

describe('CityInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityInfoService]
    });
  });

  it('should be created', inject([CityInfoService], (service: CityInfoService) => {
    expect(service).toBeTruthy();
  }));
});
