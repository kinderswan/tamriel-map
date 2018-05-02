import { TestBed, inject } from "@angular/core/testing";

import { CityInfoService } from "../app/infrastructure/city-info.service";

describe("CityInfoService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: CityInfoService,
					useClass: class {
						get = jasmine.createSpy("get");
						post = jasmine.createSpy("post");
					}
				}
			]
		});
	});

	it(
		"should be created",
		inject([CityInfoService], (service: CityInfoService) => {
			expect(service).toBeTruthy();
		})
	);
});
