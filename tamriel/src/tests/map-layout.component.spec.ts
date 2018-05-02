import { AppModule } from "app/app-main/app.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MapLayoutComponent } from "../app/components/map-layout/map-layout.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

describe("MapLayoutComponent", () => {
	let component: MapLayoutComponent;
	let fixture: ComponentFixture<MapLayoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [CommonModule, FormsModule, ReactiveFormsModule],
			declarations: [MapLayoutComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MapLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should be created", () => {
		expect(component).toBeTruthy();
	});
});
