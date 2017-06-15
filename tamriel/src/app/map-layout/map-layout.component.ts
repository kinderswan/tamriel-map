import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-layout',
  templateUrl: './map-layout.component.html',
  styleUrls: ['./map-layout.component.css']
})
export class MapLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private TamrielMapSVG = require("../../images/tamrielmap.svg");

}
