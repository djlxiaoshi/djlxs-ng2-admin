/**
 * Created by JohnLi on 2017/8/3.
 */
import {Routes,RouterModule} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/maps.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'maps', component: MapsComponent}
]

export const routing = RouterModule.forRoot(routes, {useHash: true});
