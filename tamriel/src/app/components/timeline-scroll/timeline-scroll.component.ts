import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Injectable } from "@angular/core";
import { TimePeriod } from "../../models/timePeriod";
import { CityMarker } from "../../models/cityMarker";
import { DateMarker } from "../../models/dateMarker";
import { EventDispatcher, Events } from "../../shared/eventDispatcher";
import { TimelineScrollService } from "../../infrastructure/timeline-scroll.service";

@Component({
	selector: "app-timeline-scroll",
	templateUrl: "./timeline-scroll.component.html"
})
export class TimelineScrollComponent implements OnInit {
	@Output() blockClick: EventEmitter<TimePeriod> = new EventEmitter<TimePeriod>();

	timePeriods: TimePeriod[];

	constructor(private eventDispatcher: EventDispatcher
		, private timelineService: TimelineScrollService) {}

	ngOnInit() {
		this.timelineService.getTimePeriods().subscribe(x => this.timePeriods = x);
	}

	handleBlockClick(event): void {
		const period = new TimePeriod();
		period.StartTime = event.StartTime;
		period.EndTime = event.EndTime;
		this.blockClick.emit(period);
		this.eventDispatcher.publish(Events.Components.TimelineScroll["TimePeriodSelected"], period);
	}
}
