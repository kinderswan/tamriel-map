import { CityInfoService } from "./../app/infrastructure/city-info.service";
import { EventDispatcher } from "./../app/shared/eventDispatcher";
import { EscapeHtmlPipe } from "./../app/pipes/keep-html.pipe";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CityInfoComponent } from "../app/components/city-info/city-info.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "app/app-main/app.module";
import { CommonModule } from "@angular/common";
import { PipeModule } from "../app/pipes/pipe.module";

describe("CityInfoComponent", () => {
	let component: CityInfoComponent;
	let fixture: ComponentFixture<CityInfoComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [PipeModule],
			declarations: [CityInfoComponent],
			providers: [
				EscapeHtmlPipe,
				{
					provide: EventDispatcher,
					useClass: class {
						subscribe = jasmine.createSpy("subscribe")
					}
				},
				{
					provide: CityInfoService,
					useClass: class {}
				}
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CityInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should be created", () => {
		expect(component).toBeTruthy();
	});
});
