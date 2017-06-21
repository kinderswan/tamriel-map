import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapLayoutComponent }   from '../map-layout/map-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  { path: 'layout', redirectTo: '/layout', pathMatch: 'full' },
  { path: 'layout',  component: MapLayoutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
