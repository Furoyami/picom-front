import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutAnnonceComponent } from './ajout-annonce.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    AjoutAnnonceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    AjoutAnnonceComponent
  ]
})
export class AjoutAnnonceModule { }
