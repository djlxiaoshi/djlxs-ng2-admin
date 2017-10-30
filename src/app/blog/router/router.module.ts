import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {ButtonModule} from 'primeng/primeng';
import { RouterComponent } from './router.component';
import { Child1RouterComponent } from './child1-router/child1-router.component';

import {RouterConfig} from './router.router';

import {CanActiveService} from './can-active.service';
import {ResolveGuard} from './resolve.service';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild(RouterConfig)
  ],
  exports: [],
  providers: [ResolveGuard],
  declarations: [RouterComponent, Child1RouterComponent]
})
export class MyRouterModule { }
