import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnonceModel } from 'src/app/model/annonce.model';
import { TrancheHoraireModel } from 'src/app/model/tranchehoraire.model';
import { ZoneModel } from 'src/app/model/zone.model';
import { AnnonceService } from 'src/app/services/annonce.service';
import { TrancheHoraireService } from 'src/app/services/tranche-horaire.service';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.component.html',
  styleUrls: ['./ajout-annonce.component.css']
})
export class AjoutAnnonceComponent implements OnInit {

  annonce: AnnonceModel = new AnnonceModel();
  formAnnonce: FormGroup;
  zones: ZoneModel[] = [];
  trancheHoraires: TrancheHoraireModel[] = [];

  constructor(private _fb: FormBuilder,
    private _annonceService: AnnonceService,
    private _zoneService: ZoneService,
    private _trancheHoraireService: TrancheHoraireService,
    private _route: Router) { }

  ngOnInit(): void {
    //initialisation du formGroup
    this._zoneService.recupererZones().subscribe(data =>
      this.zones = data);

    this._trancheHoraireService.recupererTrancheHoraires().subscribe(data =>
      this.trancheHoraires = data);

    this.formAnnonce = this._fb.group({
      dateHeureDebut: new FormControl('', Validators.required),
      contenu: new FormControl('', Validators.required),
      //ajouter les autres champs
      lstZones: new FormControl(''),
      lstTrancheHoraires: new FormControl('')
    });
  }

  createAnnonce(): AnnonceModel {
    this.annonce.dateHeureDebut = this.formAnnonce.get('dateHeureDebut').value;
    this.annonce.contenu = this.formAnnonce.get('contenu').value;
    this.annonce.numeroCarte = this.formAnnonce.get('numeroCarte').value;
    this.annonce.anneeExpiration = this.formAnnonce.get('anneeExpiration').value;
    this.annonce.moisExpiration = this.formAnnonce.get('moisExpiration').value;
    this.annonce.cryptogramme = this.formAnnonce.get('cryptogramme').value;
    this.annonce.montantRegleEnEuros = 100;

    this.annonce.idClient = Number(sessionStorage.getItem('utilisateur'));

    return this.annonce;
  }

  submitForm() {
    this.createAnnonce();
    this._annonceService.enregistrerAnnonce(this.annonce).subscribe();
    this._route.navigate(['/dashboard']);
  }

  test() {
    console.log(this.formAnnonce);

  }

}
