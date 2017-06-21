import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { CityMarker } from "./../models/cityMarker";

@Injectable()
export class MapLayoutService {

  constructor(private http: Http) {
  }

  private allCitiesUrl: string = "http://10.143.13.41:451/api/cities"

  getCities(): Observable<CityMarker[]> {
    return this.http.get(this.allCitiesUrl, {
      headers: this.appendCORSHeaders()
    }).map(res => res.json());
  }

 
  private appendCORSHeaders(): Headers {
    var headers = new Headers();
    return headers;
  }

}
