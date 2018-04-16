import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { TimePeriod } from "./../models/timePeriod";

@Injectable()
export class TimelineScrollService {

  constructor(private http: Http) {
  }

  private periodsUrl = "http://localhost:451/api/time"

  getTimePeriods(): Observable<TimePeriod[]> {
    return this.http.get(this.periodsUrl, {
      headers: this.appendCORSHeaders()
    }).map(res => res.json());
  }

  private appendCORSHeaders(): Headers {
    const headers = new Headers();
    return headers;
  }

}
