import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Injectable } from "@angular/core";
import { TimePeriod } from "../../models/timePeriod";
import { CityMarker } from "../../models/cityMarker";
import { DateMarker } from "../../models/dateMarker";
import { EventDispatcher, Events } from "../../shared/eventDispatcher";
import { TimelineScrollService } from "../../infrastructure/timeline-scroll.service";

@Component({
	selector: "app-timeline-scroll",
	templateUrl: "./timeline-scroll.component.html",
	styleUrls: ["./timeline-scroll.component.css"],
	providers: [EventDispatcher, TimelineScrollService]
})
export class TimelineScrollComponent implements OnInit {
	timePeriodCollection: Array<TimePeriod>;

	constructor(private eventDispatcher: EventDispatcher, private timelineService: TimelineScrollService) {}

	ngOnInit() {
		this.getAllTimePeriods();
	}

	@ViewChild("timeLineScroll") timeLineScroll: ElementRef;
	@ViewChild("longdiv") londDiv: ElementRef;

	private buildTimeMap(periods): void {
		this.timePeriodCollection = periods;
		this.timePeriodCollection.forEach((item) => {
			this.londDiv.nativeElement.append(this.createTimeBlock(item));
		});
	}

	private createTimeBlock(period: TimePeriod): HTMLElement {
		const block = document.createElement("div");
		block.setAttribute("class", "timeBlock");
		block.setAttribute("data-startyear", period.StartTime.Year.toString());
		block.setAttribute("data-startepoch", period.StartTime.Epoch);
		block.setAttribute("data-endyear", period.EndTime.Year.toString());
		block.setAttribute("data-endepoch", period.EndTime.Epoch);
		block.textContent = `${period.StartTime.Epoch + period.StartTime.Year}-${period.EndTime.Epoch + period.EndTime.Year}`;
		block.addEventListener("click", this.handleBlockClick.bind(this), false);

		return block;
	}

	handleBlockClick(event): void {
		var period = new TimePeriod();
		period.StartTime = new DateMarker(event.target.dataset.startyear, event.target.dataset.startepoch);
		period.EndTime = new DateMarker(event.target.dataset.endyear, event.target.dataset.endepoch);
		this.eventDispatcher.publish(Events.Components.TimelineScroll["TimePeriodSelected"], period);
	}

	private getAllTimePeriods(): void {
		var x = [];
		this.timelineService.getTimePeriods().subscribe((periods) => this.buildTimeMap(periods), (error) => console.log(error));
	}
}
