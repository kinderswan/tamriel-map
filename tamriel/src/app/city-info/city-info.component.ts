import { Component, OnInit, Input, Injectable, ViewChild, ElementRef } from '@angular/core';
import { CityMarker } from '../models/cityMarker';
import { EventDispatcher, Events } from '../shared/eventDispatcher'

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
  providers: [EventDispatcher]
})


export class CityInfoComponent implements OnInit {

  eventDispatcher: EventDispatcher;

  cityNameDisplayed: string;

  constructor(eventDispatcher: EventDispatcher) {
	this.eventDispatcher = eventDispatcher;
  }

  ngOnInit() {
	this.subscribeForEvents();
  }

  private onCityClicked(event: CustomEvent): void {
	this.cityNameDisplayed = event.detail.Name;
  }

  private subscribeForEvents(): void {
	this.eventDispatcher.subscribe(Events.Components.MapLayout.MapCitySelected, this.onCityClicked, this)
  }

}
