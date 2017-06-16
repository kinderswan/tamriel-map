import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, EventEmitter, Input, Output, Injectable } from '@angular/core';
import { City } from '../models/city';
import { TimePeriod } from '../models/timePeriod';

@Component({
  selector: 'app-map-layout',
  templateUrl: './map-layout.component.html',
  styleUrls: ['./map-layout.component.css'],
  providers: []
})

export class MapLayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.addMapPoints();
  }

  /**
   * impl region
   */

  @ViewChild('maplayout') mapLayoutImage: ElementRef;

  @Input() periodInfo: TimePeriod;

  private addMapPoints(): void {
    this.createMapPoint("test", 287, 209);
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
  }

  private triggerEvent(data: City): void {
    var event = new CustomEvent("cityClicked", { detail: data });
    window.dispatchEvent(event);
  }

  private alert() {
    alert(1);
  }


}
