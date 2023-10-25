import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { avis, Collegue, randomUser, Vote } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public collegues$ = new Subject<Collegue[]>(); // flux du tableau des collegues

  private url = 'https://formation-angular-collegues.herokuapp.com/api/v1';
  private randomUserUrl =
    'https://randomuser.me/api/?inc=name,login,picture&nat=fr&password=upper,lower,number,special,8&results=5&noinfo';

  constructor(private http: HttpClient) {}

  ///////////// FLUX SUBJECT COLLEGUES ///////////////////

  refreshListeCollegues() {
    this.getCollegues().subscribe((data) => this.collegues$.next(data));
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
    this.http.post(this.url + '/votes', body).subscribe((data) => {
      console.log('data', data); // vérification de l'opération => retour collegue modifié si ok
      this.refreshListeCollegues(); // update fiche collegue
    });
  }

  listerVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.url + '/votes');
  }

  getCollegueByPseudo(pseudo: string): Observable<Collegue> {
    return this.http.get<Collegue>(this.url + '/collegues/' + pseudo);
  }

  ////////////// API RANDOM USER //////////////////
  getRandomUser(): Observable<randomUser[]> {
    return this.http.get<{ results: randomUser[] }>(this.randomUserUrl).pipe(
      map((data) => {
        return data.results;
      })
    );
  }
}
