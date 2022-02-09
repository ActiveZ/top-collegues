import { Component, Input, OnInit } from '@angular/core';
import { avis, Collegue } from 'src/app/models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss'],
})
export class CollegueComponent implements OnInit {
  @Input() collegue!: Collegue;

  btAimerDisabled: boolean = false;
  btDetesterDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.btAimerDisabled = this.collegue.score >= 1000;
    this.btDetesterDisabled = this.collegue.score <= -1000;
  }

  onChangeScore(monAvis: avis) {
    if (monAvis == avis.AIME) this.collegue.score += 100;
    if (monAvis == avis.DETESTE) this.collegue.score -= 100;
    this.btAimerDisabled = this.collegue.score >= 1000;
    this.btDetesterDisabled = this.collegue.score <= -1000;
  }
}
