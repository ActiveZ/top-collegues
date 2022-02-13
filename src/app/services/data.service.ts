import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { avis, Collegue, Vote } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public collegues$ = new Subject<Collegue[]>(); // flux du tableau des collegues

  private url = 'https://formation-angular-collegues.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {}

  ///////////// FLUX SUBJECT COLLEGUES ///////////////////

  refreshListeCollegues() {
    this.getCollegues()
      .subscribe(
        data => this.collegues$.next(data)
      );
  }

  /////////////////// API //////////////////////

  getCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>(this.url + '/collegues');
  }

  postCollegue(collegue: Partial<Collegue>): Observable<Collegue> {
    return this.http.post<Collegue>(this.url + '/collegues', collegue);
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

  getCollegueByPseudo(pseudo: string): Observable<Collegue> {
    return this.http.get<Collegue>(this.url + '/collegues/' + pseudo);
  }
}
