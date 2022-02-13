import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss'],
})
export class ListeColleguesComponent implements OnInit {
  collegues?: Observable<Collegue[]>;

  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {
    // abonnement au flux
    this.collegues = this.dataSrv.collegues$.asObservable();
    // chargement de la liste
    this.dataSrv.refreshListeCollegues();
  }
}
