import { CityMarkerEditorComponent } from './../admin/city-marker-editor.component';
import { AdminGuard } from './../shared/admin.guard';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "../admin/admin.component";
import { PeriodInfoEditorComponent } from "../admin/period-info-editor.component";
import { CityInfoEditorComponent } from "./../admin/city-info-editor.component";
import { MainComponent } from "./../components/main-container/main.component";

const routes: Routes = [
	{ path: "", redirectTo: "/layout", pathMatch: "full" },
	{ path: "layout", redirectTo: "/layout", pathMatch: "full" },
	{ path: "layout", component: MainComponent },
	{ path: "admin", component: AdminComponent, canActivate: [AdminGuard] },
	{ path: "editFullCityInfo", component: CityInfoEditorComponent, canActivate: [AdminGuard] },
	{ path: "editShortCityInfo", component: PeriodInfoEditorComponent, canActivate: [AdminGuard] },
	{ path: "editMarkers", component: CityMarkerEditorComponent, canActivate: [AdminGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
