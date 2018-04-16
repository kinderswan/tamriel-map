import { CityMarker } from "app/models/cityMarker";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "[app-map-point]",
	templateUrl: "./map-point.component.html"
})
export class MapPointComponent {
	@Input() markers: CityMarker[] = [];

	@Output() mapPointClick: EventEmitter<CityMarker> = new EventEmitter<CityMarker>();

	onMapPointClick(marker: CityMarker){
		this.mapPointClick.emit(marker);
	}
}
