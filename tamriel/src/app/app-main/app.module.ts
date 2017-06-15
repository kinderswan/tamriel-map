import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {CityInfoComponent} from '../city-info/city-info.component'
import {MapLayoutComponent} from '../map-layout/map-layout.component'

@NgModule({
  declarations: [
    AppComponent,
    CityInfoComponent,
    MapLayoutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
