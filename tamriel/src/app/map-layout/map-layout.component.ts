import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, EventEmitter, Input, Output, Injectable } from '@angular/core';
import { City } from '../models/city';
import { TimePeriod } from '../models/timePeriod';
import { EventDispatcher, Events } from '../shared/eventDispatcher'

@Component({
  selector: 'app-map-layout',
  templateUrl: './map-layout.component.html',
  styleUrls: ['./map-layout.component.css'],
  providers: [EventDispatcher]
})

export class MapLayoutComponent implements OnInit {

  eventDispatcher: EventDispatcher;
  
  constructor(eventDispatcher: EventDispatcher) {
    this.eventDispatcher = eventDispatcher;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.subscribeForEvents();
  }

  /**
   * impl region
   */

  @ViewChild('maplayout') mapLayoutImage: ElementRef;

  @Input() periodInfo: TimePeriod;

  private addMapPoints(cities: Array<City>): void {
    cities.forEach((x) => this.createMapPoint(x.Name, x.PositionX, x.PositionY));
  }

  private createMapPoint(className: string, x: number, y: number) {
    let svgDocument = this.mapLayoutImage.nativeElement;
    let shape: SVGGraphicsElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    shape.setAttributeNS(null, "cx", x.toString());
    shape.setAttributeNS(null, "cy", y.toString());
    shape.setAttributeNS(null, "r", "5");
    shape.setAttributeNS(null, "fill", "black");
    shape.setAttributeNS(null, "class", className);
    shape.addEventListener("click", this.handleShapeClick.bind(this), false);
    svgDocument.appendChild(shape);
  }


  private handleShapeClick(event): void {
    let clickedCityModel = new City(event.target.className.baseVal, 0, 0);
    this.eventDispatcher.publish(Events.Components.MapLayout.MapCitySelected, clickedCityModel);
  } 

  private subscribeForEvents(): void {
    this.eventDispatcher.subscribe(Events.Components.TimelineScroll.TimePeriodSelected, this.onTimePeriodClicked, this)
  }

  private onTimePeriodClicked(event: any): void{
    let cities: Array<City> = event.detail;
    this.addMapPoints(cities);
  }
}
