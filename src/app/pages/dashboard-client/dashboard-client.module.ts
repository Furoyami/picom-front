import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardClientComponent } from './dashboard-client.component';
import { AjoutAnnonceModule } from 'src/app/components/ajout-annonce/ajout-annonce.module';



@NgModule({
  declarations: [
    DashboardClientComponent
  ],
  imports: [
    CommonModule,
    AjoutAnnonceModule
  ],
  exports: [
    DashboardClientComponent
  ]
})
export class DashboardClientModule { }
