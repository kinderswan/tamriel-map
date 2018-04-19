import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CityFullInfo } from "app/models/cityFullInfo";

import { MapLayoutService } from "./../infrastructure/map-layout.service";
import { CityMarker } from "./../models/cityMarker";
import { DateMarker } from "../models/dateMarker";

@Component({
	selector: "app-city-marker-editor",
	templateUrl: "./city-marker-editor.component.html"
})
export class CityMarkerEditorComponent implements OnInit {
	constructor(private service: MapLayoutService, private router: Router) {}

	public infos: CityMarker[];
	ngOnInit(): void {
		this.service.getCities().subscribe((x) => (this.infos = x));
	}

	removeItem(index: number) {
		this.infos.splice(index, 1);
	}

	addNew() {
		const newItem = new CityMarker("", 0, 0);
		this.infos.push(newItem);
	}

	removeMention(index: number, mentIndex: number) {
		this.infos[index].Mentioned.splice(mentIndex, 1);
	}

	addMention(index: number) {
		if (!this.infos[index].Mentioned) {
			this.infos[index].Mentioned = [];
		}
		this.infos[index].Mentioned.push(<DateMarker>{
			Year: 0,
			Epoch: ""
		});
	}

	save() {
		this.service.saveMarkers(this.infos.filter((x) => !!x.PointName)).subscribe((x) => {
			if (x.ok) {
				alert("saved");
			}
		});
	}

	back() {
		this.router.navigate(["admin"]);
	}
}
