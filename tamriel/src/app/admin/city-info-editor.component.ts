import { CityInfo } from "./../models/cityInfo";
import { CityInfoService } from "./../infrastructure/city-info.service";
import { Component, OnInit } from "@angular/core";
import { CityFullInfo } from "app/models/cityFullInfo";
import { Router } from "@angular/router";

@Component({
	selector: "app-city-info-editor",
	templateUrl: "./city-info-editor.component.html"
})
export class CityInfoEditorComponent implements OnInit {
	constructor(private service: CityInfoService, private router: Router) {}

	public infos: CityFullInfo[];
	ngOnInit(): void {
		this.service.getFullCityInfos().subscribe((x) => (this.infos = x));
	}

	removeItem(index: number) {
		this.infos.splice(index, 1);
	}

	addNew() {
		const newItem = new CityFullInfo();
		this.infos.push(newItem);
	}

	save() {
		this.service.saveFullCityInfos(this.infos.filter((x) => !!x.PointName)).subscribe((x) => {
			if (x.ok) {
				alert("saved");
			}
		});
	}

	back() {
		this.router.navigate(["admin"]);
	}
}
