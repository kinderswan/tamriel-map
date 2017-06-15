import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapLayoutComponent }   from '../map-layout/map-layout.component';
import { CityInfoComponent }    from '../city-info/city-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  { path: 'layout',  component: MapLayoutComponent },
  { path: 'city/:name', component: CityInfoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
