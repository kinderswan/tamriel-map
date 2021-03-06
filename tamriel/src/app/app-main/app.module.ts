import { LocalStorageService } from "./../shared/localstorage.service";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { CityMarkerEditorComponent } from "app/admin/city-marker-editor.component";
import { TimelineBlockComponent } from "app/components/timeline-scroll/timeline-block.component";
import { PipeModule } from "app/pipes/pipe.module";
import { AdminGuard } from "app/shared/admin.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CityInfoComponent } from "../components/city-info/city-info.component";
import { MainComponent } from "../components/main-container/main.component";
import { TimelineScrollComponent } from "../components/timeline-scroll/timeline-scroll.component";
import { AdminComponent } from "./../admin/admin.component";
import { CityInfoEditorComponent } from "./../admin/city-info-editor.component";
import { PeriodInfoEditorComponent } from "./../admin/period-info-editor.component";
import { MapLayoutComponent } from "./../components/map-layout/map-layout.component";
import { MapPointComponent } from "./../components/map-point/map-point.component";
import { CityInfoService } from "./../infrastructure/city-info.service";
import { MapLayoutService } from "./../infrastructure/map-layout.service";
import { TimelineScrollService } from "./../infrastructure/timeline-scroll.service";
import { EventDispatcher } from "./../shared/eventDispatcher";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatCardModule } from "@angular/material";

@NgModule({
	declarations: [
		AppComponent,
		MapLayoutComponent,
		CityInfoComponent,
		TimelineScrollComponent,
		TimelineBlockComponent,
		MapPointComponent,
		MainComponent,
		AdminComponent,
		CityInfoEditorComponent,
		PeriodInfoEditorComponent,
		CityMarkerEditorComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		CommonModule,
		FormsModule,
		PipeModule,
		MatDialogModule,
		MatCardModule,
		MatButtonModule
	],
	providers: [MapLayoutService, TimelineScrollService, CityInfoService, EventDispatcher, AdminGuard, LocalStorageService],
	bootstrap: [AppComponent],
	entryComponents: [CityInfoComponent]
})
export class AppModule {}
