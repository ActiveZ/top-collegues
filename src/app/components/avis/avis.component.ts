import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { avis } from 'src/app/models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss'],
})
export class AvisComponent implements OnInit {
  @Output()
  changeScore: EventEmitter<avis> = new EventEmitter<avis>();

  constructor() {}

  ngOnInit(): void {}

  onAimer() {
    this.changeScore.emit(avis.AIME);
  }

  onDetester() {
    this.changeScore.emit(avis.DETESTE);
  }
}
