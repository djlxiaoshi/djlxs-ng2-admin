/**
 * Created by DJL箫氏 on 2017/9/23.
 */
import {Routes} from '@angular/router';
import {RouterComponent} from './router.component'
import {Child1RouterComponent} from './child1-router/child1-router.component';
import {Child2RouterComponent} from './child2-router/child2-router.component';

import {CanActiveService} from './can-active.service';

import {ResolveGuard} from './resolve.service';

export const RouterConfig: Routes = [
  { path: '', redirectTo: '/blog/router', pathMatch: 'full' },
  {path: 'blog/router/child1',
    component: Child1RouterComponent,
    resolve: {
      data: ResolveGuard
    }
  }
]
