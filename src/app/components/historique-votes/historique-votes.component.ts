import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss'],
})
export class HistoriqueVotesComponent implements OnInit {
  votes: Vote[] = [];

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.listerVotes();
  }

  listerVotes() {
    this.dataSrv.listerVotes().subscribe((data) => {
      this.votes = data;
      console.log('votes', this.votes);
    });
  }

  deleteVote(e: HTMLElement) {
    e.remove();
  }
}
