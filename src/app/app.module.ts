import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {routing} from './app.routing'

/************ primeNG**************/
import {ButtonModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';

import { LeftBarComponent } from './left-bar/left-bar.component';
import { HomeComponent } from './home/home.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { TablesComponent } from './tables/tables.component';

/**************custom module*****************/
import { ChartsModule } from './charts/charts.module';
import { EditorModule } from './editor/editor.module';
import { MapsModule } from './maps/maps.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    HomeComponent,
    TopHeaderComponent,
    HeaderLogoComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelMenuModule,
    MenuModule,
    ChartsModule,
    EditorModule,
    MapsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
