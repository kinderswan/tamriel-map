import { Component, OnInit, Input, Injectable, ViewChild, ElementRef } from "@angular/core";
import { CityMarker } from "../../models/cityMarker";
import { CityInfo } from "../../models/cityInfo";
import { EventDispatcher, Events } from "../../shared/eventDispatcher";
import { CityInfoService } from "../../infrastructure/city-info.service";
import { CityFullInfo } from "../../models/cityFullInfo";
import { Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
	selector: "app-city-info",
	templateUrl: "./city-info.component.html",
	styleUrls: ["./city-info.component.css"]
})
export class CityInfoComponent implements OnInit {
	cityDisplayed: CityInfo;

	cityFullInfo: CityFullInfo;

	constructor(
		private eventDispatcher: EventDispatcher,
		private infoService: CityInfoService,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<CityInfoComponent>
	) {}

	ngOnInit() {
		if(this.data.full){
			this.onCityClicked();
			return;
		}
		this.onFlagClicked();
	}

	private onCityClicked(): void {
		this.infoService.getFullCityInfo(this.data.cityName).subscribe((result) => this.displayFullCityInfo(result));
	}

	private onFlagClicked(): void {
		this.infoService.getCityInfoForTimePeriod(this.data).subscribe((result) => this.displayCityDateInfo(result));
	}

	private displayCityDateInfo(result: CityInfo) {
		this.clearAll();
		this.cityDisplayed = result[0];
	}

	private displayFullCityInfo(result: CityFullInfo) {
		this.clearAll();
		this.cityFullInfo = result[0];
	}

	private clearAll() {
		this.cityDisplayed = null;
		this.cityFullInfo = null;
	}
}
