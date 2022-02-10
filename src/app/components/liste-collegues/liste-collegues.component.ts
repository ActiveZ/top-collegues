import { Component, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss'],
})
export class ListeColleguesComponent implements OnInit {

  // tableau des collegues
  collegues: Collegue[] = [];

  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {
    // création d'un tableau de collègues au démarrage
    this.getCollegues();
  }

  getCollegues() {
    this.dataSrv.getCollegues().subscribe((data) => (this.collegues = data));
  }
}
