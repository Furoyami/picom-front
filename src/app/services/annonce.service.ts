import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnonceModel } from '../model/annonce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  URL = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  public recupererAnnonces(): Observable<AnnonceModel[]> {
    return this.http.get<AnnonceModel[]>(`${this.URL}` + '/annonces', this.httpOptions);
  }

  public enregistrerAnnonce(annonce: AnnonceModel): Observable<AnnonceModel> {
    return this.http.post<AnnonceModel>(this.URL + '/ajoutAnnonce', annonce, this.httpOptions);
  }


}
