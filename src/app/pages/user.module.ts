import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*********primeNg********/
import {DialogModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

/************user component*************/
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
// import {HomeComponent} from './home/home.component'
// import {TopHeaderComponent} from './top-header/top-header.component'
// import {LeftBarComponent} from './left-bar/left-bar.component'
// import {HeaderLogoComponent} from './logo/logo.component'


@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    PanelMenuModule,
    MenuModule,
    ButtonModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
