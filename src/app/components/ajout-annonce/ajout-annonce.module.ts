import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutAnnonceComponent } from './ajout-annonce.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    AjoutAnnonceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    EditorModule
  ],
  exports: [
    AjoutAnnonceComponent
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class AjoutAnnonceModule { }
