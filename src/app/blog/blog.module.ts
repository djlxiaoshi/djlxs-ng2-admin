import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {ButtonModule} from 'primeng/primeng';

import {MyRouterModule} from './router/router.module';
import { DirectiveDirective } from './directive/directive.directive'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MyRouterModule
  ],
  exports: [],
  declarations: [
    DirectiveDirective
  ]
})
export class BlogModule { }
