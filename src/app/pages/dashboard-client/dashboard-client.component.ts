import { Component, OnInit } from '@angular/core';
import { AnnonceModel } from 'src/app/model/annonce.model';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

  annonces: AnnonceModel[];

  constructor(private _annonceService: AnnonceService) { }

  ngOnInit(): void {
    this._annonceService.recupererAnnonces().subscribe((data: AnnonceModel[]) => {
      console.log(data);
      this.annonces = data;
    });
  }

}
