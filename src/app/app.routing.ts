/**
 * Created by JohnLi on 2017/8/3.
 */
import {Routes,RouterModule} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/component/editor.component';
import { ChartsComponent } from './charts/component/charts.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/component/maps.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'component', component: EditorComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'maps', component: MapsComponent}
]

export const routing = RouterModule.forRoot(routes, {useHash: true});
