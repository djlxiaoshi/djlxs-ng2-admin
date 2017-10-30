/**
 * Created by JohnLi on 2017/8/3.
 */
import {Routes,RouterModule} from '@angular/router'

import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './editor/component/editor.component';
import { ChartsComponent } from './charts/component/charts.component';
import { D3Component } from './d3/d3.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/component/maps.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsComponent } from './forms/component/forms.component';
import {BlogComponent} from './blog/blog.component';
import {ServiceComponent} from './blog/service/service.component'
import {RouterComponent} from './blog/router/router.component'

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'component', component: EditorComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'd3', component: D3Component},
  {path: 'forms', component: FormsComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'blog/lifecircle', component: BlogComponent},
  {path: 'blog/service', component: ServiceComponent},
  {path: 'blog/router', component: RouterComponent}
]

export const routing = RouterModule.forRoot(routes, {useHash: true});
