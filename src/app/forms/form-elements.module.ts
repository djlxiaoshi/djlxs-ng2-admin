import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms'

import {DropdownModule} from 'primeng/primeng';

import {FormsComponent} from './component/forms.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  declarations: [
    FormsComponent
  ]
})
export class FormElementsModule { }
