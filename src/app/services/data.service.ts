import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { avis, Collegue } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://formation-angular-collegues.herokuapp.com/api/v1';

  private headers = {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
  };

  constructor(private http: HttpClient) {}

  getCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>(this.url + '/collegues');
  }

  vote(pseudo: string, avis: avis) {
    const body = {
      avis: 'AIMER',
      // avis: avis,
      pseudo: pseudo,
    };
    console.log('log', JSON.stringify(body), this.url);
    this.http
      .post(this.url + '/votes', JSON.stringify(body))
      .subscribe((data) => console.log('data', data));
  }
}
