import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEventsComponent } from "./events/list-events/list-events.component";
import { AddEventComponent } from "./events/add-event/add-event.component";
import { EditEventComponent } from "./events/edit-event/edit-event.component";

import { ListCitiesComponent } from "./cities/list-cities/list-cities.component";
import { AddCityComponent } from "./cities/add-city/add-city.component";
import { EditCityComponent } from "./cities/edit-city/edit-city.component";

import { ListOrgsComponent } from "./orgs/list-orgs/list-orgs.component";
import { AddOrgComponent } from "./orgs/add-org/add-org.component";
import { EditOrgComponent } from "./orgs/edit-org/edit-org.component";


const routes: Routes = [
  { path: 'events', component: ListEventsComponent },
  { path: 'events/add', component: AddEventComponent },
  { path: 'events/edit/:id', component: EditEventComponent },

  { path: 'cities', component: ListCitiesComponent },
  { path: 'cities/add', component: AddCityComponent },
  { path: 'cities/edit/:id', component: EditCityComponent },

  { path: 'orgs', component: ListOrgsComponent },
  { path: 'orgs/add', component: AddOrgComponent },
  { path: 'orgs/edit/:id', component: EditOrgComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
