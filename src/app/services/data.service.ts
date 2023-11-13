import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Collegue, Vote, avis, randomUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private url = 'https://formation-angular-collegues.herokuapp.com/api/v1';
  private url = ' http://localhost:3000/collegues';
  
  private randomUserUrl =
  'https://randomuser.me/api/?inc=name,login,picture&nat=fr&password=upper,lower,number,special,8&results=5&noinfo';
  
  public collegues$ = new Subject<Collegue[]>(); // flux du tableau des collegues

  constructor(private http: HttpClient) {}

  ///////////// FLUX SUBJECT COLLEGUES ///////////////////

  refreshListeCollegues() {
    this.getCollegues().subscribe((data) => this.collegues$.next(data));
  }

  /////////////////// API //////////////////////

  getCollegues(): Observable<Collegue[]> {
    // return this.http.get<Collegue[]>(this.url + '/collegues');
    return this.getRandomUser();
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

  getRandomUser(): Observable<Collegue[]> {
    return this.http.get<{ results: randomUser[] }>(this.randomUserUrl).pipe(
      map((data) =>
        data.results.map((person: randomUser) => {
          return {
            id: person.login.uuid,
            prenom: person.name.first,
            nom: person.name.last,
            pseudo: person.login.username,
            photo: person.picture.large,
            score: 0,
          };
        })
      )
    );
  }
}
