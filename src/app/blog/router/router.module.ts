/**
 * Created by JohnLi on 2017/9/21.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {RouterComponent} from './router.component'

import {RouterConfig} from './router'

import { Child1Component } from './child1/child1.component';

@NgModule({
  imports: [RouterModule.forChild(RouterConfig)],
  declarations: [RouterComponent, Child1Component],
  exports: [],
})

export class MyRouterModule {}
