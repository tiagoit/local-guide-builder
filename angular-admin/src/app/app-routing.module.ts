import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

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
  { path: '', redirectTo: '/events', pathMatch: 'full' },

  { path: 'login', component: LoginComponent},

  { path: 'events', component: ListEventsComponent, canActivate: [AuthGuard] },
  { path: 'events/add', component: AddEventComponent, canActivate: [AuthGuard] },
  { path: 'events/edit/:id', component: EditEventComponent, canActivate: [AuthGuard] },

  { path: 'cities', component: ListCitiesComponent, canActivate: [AuthGuard] },
  { path: 'cities/add', component: AddCityComponent, canActivate: [AuthGuard] },
  { path: 'cities/edit/:id', component: EditCityComponent, canActivate: [AuthGuard] },

  { path: 'orgs', component: ListOrgsComponent, canActivate: [AuthGuard] },
  { path: 'orgs/add', component: AddOrgComponent, canActivate: [AuthGuard] },
  { path: 'orgs/edit/:id', component: EditOrgComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
