import "rxjs/add/operator/map";

import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { CityMarker } from "./../models/cityMarker";

@Injectable()
export class MapLayoutService {
	constructor(private http: Http) {}

	private allCitiesUrl = "http://localhost:451/api/cities";

	getCities(): Observable<CityMarker[]> {
		return this.http
			.get(this.allCitiesUrl, {
				headers: this.appendCORSHeaders()
			})
			.map((res) => res.json());
	}

	getCitiesByTimePeriod(epoch, start, end): Observable<CityMarker[]> {
		return this.http
			.get(`${this.allCitiesUrl}/${epoch}/${start}/${end}`, {
				headers: this.appendCORSHeaders()
			})
			.map((res) => res.json());
	}

	saveMarkers(data: CityMarker[]): Observable<Response> {
		const result = this.http.post(this.allCitiesUrl, data, {
			headers: this.appendCORSHeaders()
		});

		return result;
	}

	private appendCORSHeaders(): Headers {
		const headers = new Headers();
		return headers;
	}
}
