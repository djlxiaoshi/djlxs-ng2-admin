import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogComponent} from './blog.component'
import {LifecircleComponent} from './lifecircle/lifecircle.component'

import {ButtonModule} from 'primeng/primeng';
import { ServiceComponent } from './service/service.component';

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
    LifecircleComponent,
    BlogComponent,
    ServiceComponent,
    DirectiveDirective
  ]
})
export class BlogModule { }