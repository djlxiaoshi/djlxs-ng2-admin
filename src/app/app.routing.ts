/**
 * Created by JohnLi on 2017/8/3.
 */
import {Routes,RouterModule} from '@angular/router'

import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './editor/component/editor.component';
import { ChartsComponent } from './charts/component/charts.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/component/maps.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsComponent } from './forms/component/forms.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'component', component: EditorComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent}
]

export const routing = RouterModule.forRoot(routes, {useHash: true});
