import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CityInfoComponent } from '../city-info/city-info.component'
import { MapLayoutComponent } from '../map-layout/map-layout.component'
import { TimelineScrollComponent } from '../timeline-scroll/timeline-scroll.component'

@NgModule({
  declarations: [
    AppComponent,
    MapLayoutComponent,
    CityInfoComponent,
    TimelineScrollComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
