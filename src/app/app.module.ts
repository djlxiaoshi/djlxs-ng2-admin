import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/************ primeNG**************/
import {PanelMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';

/*******************user component************************/
import { LeftBarComponent } from './ui/left-bar/left-bar.component';
import { HomeComponent } from './ui/home/home.component';
import { TopHeaderComponent } from './ui/top-header/top-header.component';
import { TablesComponent } from './tables/tables.component';

/**************custom module*****************/
import { ChartsModule } from './charts/charts.module';
import { EditorModule } from './editor/editor.module';
import { MapsModule } from './maps/maps.module';
import {UserModule} from './ui/user.module';
import { FormElementsModule } from './forms/form-elements.module';
import {BlogModule} from './blog/blog.module';
import { D3Component } from './d3/d3.component'


import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    HomeComponent,
    TopHeaderComponent,
    TablesComponent,
    D3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelMenuModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    ChartsModule,
    EditorModule,
    MapsModule,
    UserModule,
    FormElementsModule,
    BlogModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
