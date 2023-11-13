import { Component, OnInit } from '@angular/core';
import { Collegue, randomUser } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  constructor(private dataSrv: DataService) {}

  // ngOnInit(): void {
  //   this.dataSrv.getRandomUser().subscribe((userList: Collegue[]) => {
  //     console.log('randomUserList:', userList);
  //   });
  // }

  refresh() {
    this.dataSrv.refreshListeCollegues();
  }
}
