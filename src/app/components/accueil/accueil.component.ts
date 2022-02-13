import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  refresh() {
    this.dataSrv.refreshListeCollegues();
  }
}
