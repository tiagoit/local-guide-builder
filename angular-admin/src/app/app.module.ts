import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';
import { HotkeyModule } from 'angular2-hotkeys';

import { NavComponent } from './angular-material-components/nav/nav.component';
import { AngularMaterialComponentsModule } from './angular-material-components/angular-material-components.module';
import { AppComponent } from './app.component';

import { DialogConfirm } from './angular-material-components/dialog-confirm.component';

import { ListEventsComponent } from './events/list-events/list-events.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';

import { ListCitiesComponent } from './cities/list-cities/list-cities.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { EditCityComponent } from './cities/edit-city/edit-city.component';

import { ListOrgsComponent } from './orgs/list-orgs/list-orgs.component';
import { AddOrgComponent } from './orgs/add-org/add-org.component';
import { EditOrgComponent } from './orgs/edit-org/edit-org.component';
import { UploadService } from './services/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListEventsComponent, AddEventComponent, EditEventComponent,
    ListCitiesComponent, AddCityComponent, EditCityComponent,
    ListOrgsComponent, AddOrgComponent, EditOrgComponent,
    DialogConfirm,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule, ReactiveFormsModule,
    HotkeyModule.forRoot(),
    AngularMaterialComponentsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    UploadService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfirm]
})
export class AppModule { }
