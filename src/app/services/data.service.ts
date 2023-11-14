import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Avis, Collegue, Vote } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = ' http://localhost:3000';

  public collegues$ = new Subject<Collegue[]>(); // flux du tableau des collegues

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
    collegue.score = 0;
    collegue.pseudo = collegue.pseudo?.toLowerCase(); // pour validator pseudo exist
    return this.http.post<Collegue>(this.url + '/collegues', collegue);
  }

  postVote(pseudo: string, avis: Avis) {
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

  getCollegueById(id: string): Observable<Collegue> {
    return this.http.get<Collegue>(this.url + '/collegues/' + id);
  }

  getCollegueByPseudo(pseudo: string): Observable<Collegue> {
    console.log("pseudo", pseudo);
    
    return this.http.get<Collegue>(this.url + '/collegues?pseudo=' + pseudo.toLowerCase());
  }

  ////////////// API RANDOM USER: cf fichier generate-db.js pour node //////////////////
  // private randomUserUrl =
  // 'https://randomuser.me/api/?inc=name,login,picture&nat=fr&password=upper,lower,number,special,8&results=5&noinfo';

  // getRandomUser(): Observable<Collegue[]> {
  //   return this.http.get<{ results: randomUser[] }>(this.randomUserUrl).pipe(
  //     map((data) =>
  //       data.results.map((person: randomUser) => {
  //         return {
  //           id: person.login.uuid,
  //           prenom: person.name.first,
  //           nom: person.name.last,
  //           pseudo: person.login.username,
  //           photo: person.picture.large,
  //           score: 0,
  //         };
  //       })
  //     )
  //   );
  // }
}
