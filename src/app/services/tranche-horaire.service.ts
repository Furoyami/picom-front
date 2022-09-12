import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrancheHoraireModel } from '../model/tranchehoraire.model';

@Injectable({
  providedIn: 'root'
})
export class TrancheHoraireService {

  URL = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  public recupererTrancheHoraires(): Observable<TrancheHoraireModel[]> {
    return this.http.get<TrancheHoraireModel[]>(`${this.URL}` + '/trancheHoraires', this.httpOptions);
  }
}
