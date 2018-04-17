import { CityInfoEditorComponent } from './../admin/city-info-editor.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./../components/main-container/main.component";
import { AdminComponent } from "../admin/admin.component";

const routes: Routes = [
	{ path: "", redirectTo: "/layout", pathMatch: "full" },
	{ path: "layout", redirectTo: "/layout", pathMatch: "full" },
	{ path: "layout", component: MainComponent },
	{ path: "admin", component: AdminComponent},
	{ path: "editFullCityInfo", component: CityInfoEditorComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
