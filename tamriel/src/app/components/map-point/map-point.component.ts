import { CityMarker } from "app/models/cityMarker";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "[app-map-point]",
	templateUrl: "./map-point.component.html"
})
export class MapPointComponent {
	@Input() markers: CityMarker[] = [];

	@Input() timeMarkers: CityMarker[] = [];

	@Output() mapPointClick: EventEmitter<CityMarker> = new EventEmitter<CityMarker>();

	@Output() timePointClick: EventEmitter<CityMarker> = new EventEmitter<CityMarker>();

	onMapPointClick(marker: CityMarker) {
		this.mapPointClick.emit(marker);
	}

	onTimePointClick(marker: CityMarker) {
		this.timePointClick.emit(marker);
	}

	get pointers() {
		if (!this.timeMarkers) {
			this.timeMarkers = [];
		}
		if (this.markers && this.timeMarkers) {
			const res = this.markers.filter((x) => this.timeMarkers.map((y) => y.PointName).indexOf(x.PointName) < 0);
			return res;
		}
		return [];
	}
}
