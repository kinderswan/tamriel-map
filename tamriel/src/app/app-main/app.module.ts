import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { TimelineBlockComponent } from "app/components/timeline-scroll/timeline-block.component";

import { CityInfoComponent } from "../components/city-info/city-info.component";
import { MainComponent } from "../components/main-container/main.component";
import { MapLayoutComponent } from "../components/map-layout/map-layout.component";
import { TimelineScrollComponent } from "../components/timeline-scroll/timeline-scroll.component";
import { EscapeHtmlPipe } from "../pipes/keep-html.pipe";
import { AdminComponent } from "./../admin/admin.component";
import { CityInfoEditorComponent } from "./../admin/city-info-editor.component";
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
		EscapeHtmlPipe,
		MainComponent,
		AdminComponent,
		CityInfoEditorComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpModule, CommonModule, FormsModule],
	providers: [MapLayoutService, TimelineScrollService, CityInfoService, EventDispatcher],
	bootstrap: [AppComponent]
})
export class AppModule {}
