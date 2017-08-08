import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { EditorComponent } from './component/editor.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule
  ],
  declarations: [
    EditorComponent
  ]
})
export class EditorModule { }
