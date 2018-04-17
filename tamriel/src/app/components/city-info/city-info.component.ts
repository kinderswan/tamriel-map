import { Component, OnInit, Input, Injectable, ViewChild, ElementRef } from "@angular/core";
import { CityMarker } from "../../models/cityMarker";
import { CityInfo } from "../../models/cityInfo";
import { EventDispatcher, Events } from "../../shared/eventDispatcher";
import { CityInfoService } from "../../infrastructure/city-info.service";
import { CityFullInfo } from "../../models/cityFullInfo";

@Component({
	selector: "app-city-info",
	templateUrl: "./city-info.component.html",
	styleUrls: ["./city-info.component.css"]
})
export class CityInfoComponent implements OnInit {
	cityDisplayed: CityInfo;

	cityFullInfo: CityFullInfo;

	constructor(private eventDispatcher: EventDispatcher, private infoService: CityInfoService) {}

	ngOnInit() {
		this.subscribeForEvents();
	}

	private onCityClicked(event: CustomEvent): void {
		this.infoService.getFullCityInfo(event.detail).subscribe((result) => this.displayFullCityInfo(result));
	}

	private onFlagClicked(event: CustomEvent): void {
		this.infoService.getCityInfoForTimePeriod(event.detail).subscribe((result) => this.displayCityDateInfo(result));
	}

	private subscribeForEvents(): void {
		this.eventDispatcher.subscribe(Events.Components.MapLayout["MapCitySelected"], this.onCityClicked, this);
		this.eventDispatcher.subscribe(Events.Components.MapLayout["MapFlagSelected"], this.onFlagClicked, this);
	}

	private displayCityDateInfo(result: CityInfo) {
		this.clearAll();
		this.cityDisplayed = result[0];
	}

	private displayFullCityInfo(result: CityFullInfo) {
		this.clearAll();
		this.cityFullInfo = result[0];
	}

	private clearAll(){
		this.cityDisplayed = null;
		this.cityFullInfo = null;
	}
}
