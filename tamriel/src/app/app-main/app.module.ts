import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CityInfoComponent } from "../components/city-info/city-info.component";
import { MapLayoutComponent } from "../components/map-layout/map-layout.component";
import { TimelineScrollComponent } from "../components/timeline-scroll/timeline-scroll.component";

import { EscapeHtmlPipe } from "../pipes/keep-html.pipe";

@NgModule({
	declarations: [AppComponent, MapLayoutComponent, CityInfoComponent, TimelineScrollComponent, EscapeHtmlPipe],
	imports: [BrowserModule, AppRoutingModule, HttpModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
