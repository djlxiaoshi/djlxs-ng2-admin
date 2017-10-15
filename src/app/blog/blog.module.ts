import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {ButtonModule} from 'primeng/primeng';

import {RouterConfig} from './blog.router'

import {MyRouterModule} from './router/router.module';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MyRouterModule
  ],
  exports: [],
  declarations: []
})
export class BlogModule { }
