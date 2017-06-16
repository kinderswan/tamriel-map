import { Component, OnInit, Input, Injectable, ViewChild , ElementRef} from '@angular/core';
import { City } from '../models/city';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
  providers: []
})


export class CityInfoComponent implements OnInit {

  constructor() {
    this.cityNameDisplayed.nativeElement.addEventListener("cityClicked", this.cityClicked.bind(this), false)
  }

  ngOnInit() {
  }

  @ViewChild('cityInfo') cityNameDisplayed: ElementRef;

  private cityClicked(city: City): void {
    alert(1);
  }

}
