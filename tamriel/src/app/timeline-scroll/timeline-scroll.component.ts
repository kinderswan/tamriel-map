import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Injectable } from '@angular/core';
import { TimePeriod } from "../models/timePeriod";
import { City } from "../models/city";

@Component({
  selector: 'app-timeline-scroll',
  templateUrl: './timeline-scroll.component.html',
  styleUrls: ['./timeline-scroll.component.css']
})


export class TimelineScrollComponent implements OnInit {

  timePeriodCollection: Array<TimePeriod>;

  constructor() {
    let timePeriod = new TimePeriod();
    timePeriod.StartTime = "3E200"
    timePeriod.EndTime = "3E400"
    timePeriod.Cities = [new City("TestName", 500, 500)];
    this.timePeriodCollection = [timePeriod];
  }

  ngOnInit() {
    this.buildTimeMap();
  }

  @ViewChild('timeLineScroll') timeLineScroll: ElementRef;

  @Output() timePeriodClicked = new EventEmitter<TimePeriod>();


  private buildTimeMap(): void {
    console.log(this.timeLineScroll);
    this.timeLineScroll.nativeElement.append(this.createTimeBlock(this.timePeriodCollection[0]));
  }

  private createTimeBlock(period: TimePeriod): HTMLElement{
    let block = document.createElement("div");
    block.setAttribute("class", "timeBlock");
    block.textContent = period.EndTime + period.StartTime;
    block.addEventListener("click", this.handleBlockClick.bind(this), false);

    return block;
  }

    handleBlockClick(event): void {
    this.timePeriodClicked.emit(new TimePeriod());
  }



}
