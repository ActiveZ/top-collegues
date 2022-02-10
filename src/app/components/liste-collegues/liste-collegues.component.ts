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
  nbCollegue = 10;

  constructor() {}

  ngOnInit(): void {
    // création d'un tableau de collègues au démarrage
    this.fetchImages();
  }

  fetchImages() {
    for (let i = 0; i < this.nbCollegue; i++) {
      fetch('https://picsum.photos/200/200').then((data) => {
        this.collegues.push({
          pseudo: 'pseudo ' + (i + 1),
          photoUrl: data.url,
          score: 1000,
        });
      });
    }
  }
}
