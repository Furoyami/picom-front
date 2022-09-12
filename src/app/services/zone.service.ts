import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ZoneModel } from '../model/zone.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  URL = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  public recupererZones(): Observable<ZoneModel[]> {
    return this.http.get<ZoneModel[]>(`${this.URL}` + '/zones', this.httpOptions);
  }
}


