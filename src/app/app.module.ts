import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {routing} from './app.routing'

import {ButtonModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { HomeComponent } from './home/home.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { EditorComponent } from './editor/editor.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    HomeComponent,
    TopHeaderComponent,
    HeaderLogoComponent,
    EditorComponent,
    ChartsComponent,
    TablesComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelMenuModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
