import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Injectable } from '@angular/core';
import { TimePeriod } from '../models/timePeriod';
import { CityMarker } from '../models/cityMarker';
import { EventDispatcher, Events } from '../shared/eventDispatcher';
import { TimelineScrollService } from './timeline-scroll.service'

@Component({
  selector: 'app-timeline-scroll',
  templateUrl: './timeline-scroll.component.html',
  styleUrls: ['./timeline-scroll.component.css'],
  providers: [EventDispatcher, TimelineScrollService]
})


export class TimelineScrollComponent implements OnInit {

  timePeriodCollection: Array<TimePeriod>;

  eventDispatcher: EventDispatcher;
  timelineService: TimelineScrollService;

  constructor(eventDispatcher: EventDispatcher, timelineService: TimelineScrollService) {
	this.eventDispatcher = eventDispatcher;
	this.timelineService = timelineService;

  }

  ngOnInit() {
	this.buildTimeMap();
  }

  @ViewChild('timeLineScroll') timeLineScroll: ElementRef;


  private buildTimeMap(): void {
	this.testPeriod();
	this.timeLineScroll.nativeElement.append(this.createTimeBlock(this.timePeriodCollection[0]));
  }

  private createTimeBlock(period: TimePeriod): HTMLElement {
	const block = document.createElement('div');
	block.setAttribute('class', 'timeBlock');
	block.setAttribute('data-timeperiod', period.Id)
	block.textContent = period.EndTime + period.StartTime;
	block.addEventListener('click', this.handleBlockClick.bind(this), false);

	return block;
  }

  handleBlockClick(event): void {
	const timePeriod = event.target.dataset.timeperiod;
	this.eventDispatcher.publish(Events.Components.TimelineScroll.TimePeriodSelected, timePeriod);
  }

  testPeriod(): void{
	const timePeriod = new TimePeriod();
	timePeriod.StartTime = '3E200';
	timePeriod.EndTime = '3E400';
	timePeriod.Id = '12345';
	this.timePeriodCollection = [timePeriod];
  }
}
