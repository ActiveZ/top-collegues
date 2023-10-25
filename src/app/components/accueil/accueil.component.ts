import { Component, OnInit } from '@angular/core';
import { randomUser } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {
    this.dataSrv.getRandomUser().subscribe((userList: randomUser[]) => {
      console.log('randomUserList:', userList);
    });
  }

  refresh() {
    this.dataSrv.refreshListeCollegues();
  }
}
