import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { TimelineBlockComponent } from "app/components/timeline-scroll/timeline-block.component";

import { CityInfoComponent } from "../components/city-info/city-info.component";
import { MapLayoutComponent } from "../components/map-layout/map-layout.component";
import { TimelineScrollComponent } from "../components/timeline-scroll/timeline-scroll.component";
import { EscapeHtmlPipe } from "../pipes/keep-html.pipe";
import { MapPointComponent } from "./../components/map-point/map-point.component";
import { CityInfoService } from "./../infrastructure/city-info.service";
import { MapLayoutService } from "./../infrastructure/map-layout.service";
import { TimelineScrollService } from "./../infrastructure/timeline-scroll.service";
import { EventDispatcher } from "./../shared/eventDispatcher";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [
		AppComponent,
		MapLayoutComponent,
		CityInfoComponent,
		TimelineScrollComponent,
		TimelineBlockComponent,
		MapPointComponent,
		EscapeHtmlPipe
	],
	imports: [BrowserModule, AppRoutingModule, HttpModule, CommonModule],
	providers: [MapLayoutService, TimelineScrollService, CityInfoService, EventDispatcher],
	bootstrap: [AppComponent]
})
export class AppModule {}
