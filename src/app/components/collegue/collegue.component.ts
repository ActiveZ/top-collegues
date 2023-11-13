import { Component, Input, OnInit } from '@angular/core';
import { avis, Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss'],
})
export class CollegueComponent implements OnInit {
  @Input() collegue!: Collegue;

  btAimerDisabled: boolean = false;
  btDetesterDisabled: boolean = false;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.btAimerDisabled = this.collegue.score >= 1000;
    this.btDetesterDisabled = this.collegue.score <= -1000;
  }

  onChangeScore(monAvis: avis) {
    this.dataSrv.postVote(this.collegue.id, monAvis)
    this.btAimerDisabled = this.collegue.score >= 1000;
    this.btDetesterDisabled = this.collegue.score <= -1000;
  }
}
