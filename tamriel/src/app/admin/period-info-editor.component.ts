import { DateMarker } from "./../models/dateMarker";
import { CityInfo, InfoYear } from "./../models/cityInfo";
import { CityInfoService } from "./../infrastructure/city-info.service";
import { Component, OnInit } from "@angular/core";
import { CityFullInfo } from "app/models/cityFullInfo";
import { Router } from "@angular/router";

@Component({
	selector: "app-period-info-editor",
	templateUrl: "./period-info-editor.component.html"
})
export class PeriodInfoEditorComponent implements OnInit {
	constructor(private service: CityInfoService, private router: Router) {}

	public infos: CityInfo[];
	ngOnInit(): void {
		this.service.getShortCityInfos().subscribe((x) => (this.infos = x));
	}

	removeItem(index: number) {
		this.infos.splice(index, 1);
	}

	removeMention(index: number, mentIndex: number) {
		this.infos[index].Info.splice(mentIndex, 1);
	}

	addNew() {
		const newItem = new CityInfo();
		this.infos.push(newItem);
	}

	addMention(index: number) {
		if (!this.infos[index].Info) {
			this.infos[index].Info = [];
		}
		this.infos[index].Info.push(<InfoYear>{
			InfoText: "",
			Mentioned: <DateMarker>{
				Year: 0,
				Epoch: ""
			}
		});
	}

	save() {
		this.service.saveShortCityInfos(this.infos.filter((x) => !!x.PointName)).subscribe((x) => {
			if (x.ok) {
				alert("saved");
			}
		});
	}

	back() {
		this.router.navigate(["admin"]);
	}

	public search = "";

	filter(name: string){
		return this.search === "" || name.toUpperCase().indexOf(this.search.toUpperCase()) >= 0;
	}
}
