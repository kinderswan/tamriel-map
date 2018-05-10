import { CityInfoComponent } from "./../city-info/city-info.component";
import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { CityMarker } from "../../models/cityMarker";
import { DateMarker } from "../../models/dateMarker";
import { TimePeriod } from "../../models/timePeriod";
import { EventDispatcher, Events } from "../../shared/eventDispatcher";
import { MapLayoutService } from "../../infrastructure/map-layout.service";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
	selector: "app-map-layout",
	templateUrl: "./map-layout.component.html",
	styleUrls: ["./map-layout.component.css"]
})
export class MapLayoutComponent implements OnInit, AfterViewInit {
	constructor(private eventDispatcher: EventDispatcher, private mapService: MapLayoutService, private dialog: MatDialog) {}

	ngOnInit() {}

	ngAfterViewInit() {
		this.getAllMapPoints();
		this.subscribeForEvents();
	}

	public markers: CityMarker[];

	public timeMarkers: CityMarker[];

	/**
	 * impl region
	 */

	@ViewChild("maplayout") mapLayoutImage: ElementRef;

	periodInfo: TimePeriod;

	private getTimeMentioned(mentioned: Array<DateMarker>, timePeriod: TimePeriod) {
		const requestedDates = mentioned.filter((mention) => {
			return (
				mention.Epoch === timePeriod.StartTime.Epoch &&
				mention.Year >= timePeriod.StartTime.Year &&
				mention.Year <= timePeriod.EndTime.Year
			);
		});
		return {
			epoch: timePeriod.StartTime.Epoch,
			years: requestedDates
				.map((date) => {
					return date.Year;
				})
				.join(";")
		};
	}

	private handleShapeClick(data: CityMarker): void {
		let dialogRef: MatDialogRef<CityInfoComponent> = this.dialog.open(CityInfoComponent, {
			data: { cityName: data.PointName, full: true },
			position: "top"
		});
	}

	private handleRectClick(event: CityMarker): void {
		const times = this.getTimeMentioned(event.Mentioned, this.periodInfo);
		const data = {
			epoch: times.epoch,
			years: times.years,
			cityName: event.PointName,
			full: false
		};

		let dialogRef: MatDialogRef<CityInfoComponent> = this.dialog.open(CityInfoComponent, { data: data });
	}

	private subscribeForEvents(): void {
		this.eventDispatcher.subscribe(Events.Components.TimelineScroll["TimePeriodSelected"], this.onTimePeriodSelected, this);
	}

	private onTimePeriodSelected(event: CustomEvent) {
		this.periodInfo = event.detail;
		this.mapService
			.getCitiesByTimePeriod(this.periodInfo.StartTime.Epoch, this.periodInfo.StartTime.Year, this.periodInfo.EndTime.Year)
			.subscribe((markers) => {
				this.timeMarkers = markers;
			});
	}

	private getAllMapPoints(): void {
		this.mapService.getCities().subscribe((markers) => (this.markers = markers));
	}

	private removeElementsByClass(className) {
		const elements = document.getElementsByClassName(className);
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0]);
		}
	}

	public resetPoints() {
		this.timeMarkers = [];
	}
}
