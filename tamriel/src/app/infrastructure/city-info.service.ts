import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CityInfo } from "../models/cityInfo";
import { CityFullInfo } from "../models/cityFullInfo";

@Injectable()
export class CityInfoService {
	constructor(private http: Http) {}

	private cityInfoUrl = "http://localhost:451/api/info";

	getCityInfoForTimePeriod(data): Observable<CityInfo> {
		return this.http
			.get(`${this.cityInfoUrl}/${data.cityName}/${data.epoch}/${data.years}`, {
				headers: this.appendCORSHeaders()
			})
			.map((res) => res.json());
	}

	getFullCityInfo(name): Observable<CityFullInfo> {
		return this.http
			.get(`${this.cityInfoUrl}/${name}`, {
				headers: this.appendCORSHeaders()
			})
			.map((res) => res.json());
	}

	private appendCORSHeaders(): Headers {
		const headers = new Headers();
		return headers;
	}
}
