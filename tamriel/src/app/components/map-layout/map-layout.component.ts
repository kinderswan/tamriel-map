import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

import { CityMarker } from "../../models/cityMarker";
import { DateMarker } from "../../models/dateMarker";
import { TimePeriod } from "../../models/timePeriod";
import { EventDispatcher, Events } from "../../shared/eventDispatcher";
import { MapLayoutService } from "../../infrastructure/map-layout.service";

@Component({
	selector: "app-map-layout",
	templateUrl: "./map-layout.component.html",
	styleUrls: ["./map-layout.component.css"],
	providers: [EventDispatcher, MapLayoutService]
})
export class MapLayoutComponent implements OnInit {
	constructor(private eventDispatcher: EventDispatcher, private mapService: MapLayoutService) {}

	ngOnInit() {}

	ngAfterViewInit() {
		this.getAllMapPoints();
		this.subscribeForEvents();
	}

	/**
	 * impl region
	 */

	@ViewChild("maplayout") mapLayoutImage: ElementRef;

	@Input() periodInfo: TimePeriod;

	private addMapPoints(cities: Array<CityMarker>): void {
		cities.forEach((x) => this.createMapPoint(x));
	}

	private addFlagPoints(cities: Array<CityMarker>, timePeriod: TimePeriod): void {
		this.removeElementsByClass("flag");
		cities.forEach((x) => this.createFlagPoint(x, timePeriod));
	}

	private createMapPoint(marker: CityMarker) {
		const svgDocument = this.mapLayoutImage.nativeElement;
		const shape: SVGGraphicsElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		shape.setAttributeNS(null, "cx", marker.RelativeX.toString());
		shape.setAttributeNS(null, "cy", marker.RelativeY.toString());
		shape.setAttributeNS(null, "r", "7");
		shape.setAttributeNS(null, "fill", "black");
		shape.setAttributeNS(null, "class", marker.PointName);
		shape.addEventListener("click", this.handleShapeClick.bind(this), false);
		svgDocument.appendChild(shape);
	}

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
		var requestedDates = mentioned.filter((mention) => {
			return (
				mention.Epoch === timePeriod.StartTime.Epoch &&
				mention.Year >= timePeriod.StartTime.Year &&
				mention.Year <= timePeriod.EndTime.Year
			);
		});
		var span = document.createElement("span");
		span.dataset.epoch = timePeriod.StartTime.Epoch;
		span.dataset.years = requestedDates
			.map((date) => {
				return date.Year;
			})
			.join(";");
		return span;
	}

	private handleShapeClick(event): void {
		const clickedCityName = event.target.className.baseVal;
		this.eventDispatcher.publish(Events.Components.MapLayout["MapCitySelected"], clickedCityName);
	}

	private handleRectClick(event): void {
		var data = {
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
		var timePeriod = event.detail;
		this.mapService
			.getCitiesByTimePeriod(timePeriod.StartTime.Epoch, timePeriod.StartTime.Year, timePeriod.EndTime.Year)
			.subscribe((markers) => this.addFlagPoints(markers, timePeriod), (error) => console.log(error));
	}

	private getAllMapPoints(): void {
		this.mapService.getCities().subscribe((markers) => this.addMapPoints(markers), (error) => console.log(error));
	}

	private removeElementsByClass(className) {
		var elements = document.getElementsByClassName(className);
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0]);
		}
	}
}
