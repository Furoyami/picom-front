import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceModel } from 'src/app/model/annonce.model';
import { ClientModel } from 'src/app/model/client.model';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

  annonces: AnnonceModel[] = [];

  constructor(private _annonceService: AnnonceService,
    private _route: Router) { }

  ngOnInit(): void {
    this._annonceService.recupererAnnonces().subscribe((data: AnnonceModel[]) => {
      console.log(data);
      this.annonces = data;
    });
  }

  addAnnonce(): void {
    this._route.navigate(['/annonce']);
  }

}
