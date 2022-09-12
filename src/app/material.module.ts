import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const MODULES = [
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class MaterialModule { }
