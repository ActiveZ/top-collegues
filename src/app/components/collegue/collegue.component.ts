import { Component, Input } from '@angular/core';
import { Avis, Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss'],
})
export class CollegueComponent {
  @Input() collegue!: Collegue;

  btAimerDisabled = false;
  btDetesterDisabled = false;

  constructor(private dataSrv: DataService) {}

  ngOnInit() {
    this.btAimerDisabled = this.collegue.score >= 1000;
    this.btDetesterDisabled = this.collegue.score <= -1000;
  }

  onChangeScore(monAvis: Avis) {
    this.dataSrv.postVote(this.collegue.pseudo, monAvis);
    this.btAimerDisabled = this.collegue.score >= 1000;
    this.btDetesterDisabled = this.collegue.score <= -1000;
  }
}
