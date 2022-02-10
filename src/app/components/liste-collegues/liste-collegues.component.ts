import { Component, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss'],
})
export class ListeColleguesComponent implements OnInit {
  collInit: Collegue = {
    pseudo: '',
    photoUrl: '',
    score: 0,
  };

  // tableau des collegues
  collegues: Collegue[] = [];

  constructor() {}

  ngOnInit(): void {
    // création d'un tableau avec 10 collègues au démarrage
    for (let i = 0; i < 10; i++) {
      fetch('https://picsum.photos/200/200').then((data) => {
        this.collegues.push({
          pseudo: 'pseudo ' + (i + 1),
          photoUrl: data.url,
          score: 1000,
        });
      });
    }
    // console.log(this.collegues);
  }
}
