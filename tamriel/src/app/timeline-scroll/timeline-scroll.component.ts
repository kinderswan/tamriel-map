import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Injectable } from "@angular/core";
import { TimePeriod } from "../models/timePeriod";
import { CityMarker } from "../models/cityMarker";
import { DateMarker } from "../models/dateMarker";
import { EventDispatcher, Events } from "../shared/eventDispatcher";
import { TimelineScrollService } from "./timeline-scroll.service"

@Component({
  selector: "app-timeline-scroll",
  templateUrl: "./timeline-scroll.component.html",
  styleUrls: ["./timeline-scroll.component.css"],
  providers: [EventDispatcher, TimelineScrollService]
})


export class TimelineScrollComponent implements OnInit {

  timePeriodCollection: Array<TimePeriod>;

  constructor(private eventDispatcher: EventDispatcher, private timelineService: TimelineScrollService) {

  }

  ngOnInit() {
	this.buildTimeMap();
  }

  @ViewChild("timeLineScroll") timeLineScroll: ElementRef;


  private buildTimeMap(): void {
	this.testPeriod();
	this.timeLineScroll.nativeElement.append(this.createTimeBlock(this.timePeriodCollection[0]));
  }

  private createTimeBlock(period: TimePeriod): HTMLElement {
	const block = document.createElement("div");
	block.setAttribute("class", "timeBlock");
	block.setAttribute("data-timeperiod", period.Id)
	block.textContent = period.Id;
	block.addEventListener("click", this.handleBlockClick.bind(this), false);

	return block;
  }

  handleBlockClick(event): void {
	const timePeriod = event.target.dataset.timeperiod;
	this.eventDispatcher.publish(Events.Components.TimelineScroll["TimePeriodSelected"], timePeriod);
  }

  testPeriod(): void{
	const timePeriod = new TimePeriod();
	timePeriod.StartTime = new DateMarker(200, "4E");
	timePeriod.EndTime = new DateMarker(210, "4E");
	this.timePeriodCollection = [timePeriod];
  }
}
