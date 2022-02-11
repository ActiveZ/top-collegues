import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { avis, Collegue, Vote } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://formation-angular-collegues.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {}

  getCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>(this.url + '/collegues');
  }

  postVote(pseudo: string, avis: avis) {
    const body = {
      avis: avis,
      pseudo: pseudo,
    };
    this.http
      .post(this.url + '/votes', body)
      .subscribe((data) => console.log('data', data)); // vérification de l'opération => retour collegue modifié si ok
  }

  listerVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.url + '/votes');
  }
}
