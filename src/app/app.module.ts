import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {routing} from './app.routing'

/************ primeNG**************/
import {PanelMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';

import { LeftBarComponent } from './pages/left-bar/left-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { TopHeaderComponent } from './pages/top-header/top-header.component';
import { TablesComponent } from './tables/tables.component';

/**************custom module*****************/
import { ChartsModule } from './charts/charts.module';
import { EditorModule } from './editor/editor.module';
import { MapsModule } from './maps/maps.module';
import {UserModule} from './pages/user.module'


@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    HomeComponent,
    TopHeaderComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelMenuModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    ChartsModule,
    EditorModule,
    MapsModule,
    UserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
