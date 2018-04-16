import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { CityMarker } from "../../models/cityMarker";
import { DateMarker } from "../../models/dateMarker";
import { TimePeriod } from "../../models/timePeriod";
import { EventDispatcher, Events } from "../../shared/eventDispatcher";
import { MapLayoutService } from "../../infrastructure/map-layout.service";

@Component({
	selector: "app-map-layout",
	templateUrl: "./map-layout.component.html",
	styleUrls: ["./map-layout.component.css"]
})
export class MapLayoutComponent implements OnInit, AfterViewInit {
	constructor(private eventDispatcher: EventDispatcher, private mapService: MapLayoutService) {}

	ngOnInit() {}

	ngAfterViewInit() {
		this.getAllMapPoints();
		this.subscribeForEvents();
	}

	public markers: CityMarker[];

	/**
	 * impl region
	 */

	@ViewChild("maplayout") mapLayoutImage: ElementRef;

	@Input() periodInfo: TimePeriod;

	private createFlagPoint(marker: CityMarker, timePeriod: TimePeriod) {
		const svgDocument = this.mapLayoutImage.nativeElement;
		const shape: SVGGraphicsElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		shape.setAttributeNS(null, "x", (marker.RelativeX - 8).toString());
		shape.setAttributeNS(null, "y", (marker.RelativeY - 8).toString());
		shape.setAttributeNS(null, "width", "16");
		shape.setAttributeNS(null, "height", "16");
		shape.setAttributeNS(null, "fill", "blue");
		shape.setAttributeNS(null, "class", `${marker.PointName} flag`);
		shape.appendChild(this.createMapPointTimeElement(marker.Mentioned, timePeriod));
		shape.addEventListener("click", this.handleRectClick.bind(this), false);
		svgDocument.appendChild(shape);
	}

	private createMapPointTimeElement(mentioned: Array<DateMarker>, timePeriod: TimePeriod) {
		const requestedDates = mentioned.filter((mention) => {
			return (
				mention.Epoch === timePeriod.StartTime.Epoch &&
				mention.Year >= timePeriod.StartTime.Year &&
				mention.Year <= timePeriod.EndTime.Year
			);
		});
		const span = document.createElement("span");
		span.dataset.epoch = timePeriod.StartTime.Epoch;
		span.dataset.years = requestedDates
			.map((date) => {
				return date.Year;
			})
			.join(";");
		return span;
	}

	private handleShapeClick(data: CityMarker): void {
		this.eventDispatcher.publish(Events.Components.MapLayout["MapCitySelected"], data.PointName);
	}

	private handleRectClick(event): void {
		const data = {
			epoch: event.target.children[0].dataset.epoch,
			years: event.target.children[0].dataset.years,
			cityName: event.target.className.baseVal.split(" ")[0]
		};

		this.eventDispatcher.publish(Events.Components.MapLayout["MapFlagSelected"], data);
	}

	private subscribeForEvents(): void {
		this.eventDispatcher.subscribe(Events.Components.TimelineScroll["TimePeriodSelected"], this.onTimePeriodSelected, this);
	}

	private onTimePeriodSelected(event: CustomEvent) {
		const timePeriod = event.detail;
		this.mapService
			.getCitiesByTimePeriod(timePeriod.StartTime.Epoch, timePeriod.StartTime.Year, timePeriod.EndTime.Year)
			.subscribe((markers) => {});
	}

	private getAllMapPoints(): void {
		this.mapService.getCities().subscribe((markers) => this.markers = markers);
	}

	private removeElementsByClass(className) {
		const elements = document.getElementsByClassName(className);
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0]);
		}
	}
}
