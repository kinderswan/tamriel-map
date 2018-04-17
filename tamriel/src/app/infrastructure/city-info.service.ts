import { CityFullInfo } from "app/models/cityFullInfo";
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CityInfo } from "../models/cityInfo";

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

	getFullCityInfos(): Observable<CityFullInfo[]> {
		return this.http
			.get(`http://localhost:451/api/fullInfo`, {
				headers: this.appendCORSHeaders()
			})
			.map((res) => res.json());
	}

	saveFullCityInfos(data: CityFullInfo[]): Observable<Response> {
		const result = this.http.post(`http://localhost:451/api/fullInfo`, data, {
			headers: this.appendCORSHeaders()
		});

		return result;
	}

	private appendCORSHeaders(): Headers {
		const headers = new Headers();
		return headers;
	}
}
