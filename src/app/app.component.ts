import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'top-collegues';

  collInit: Collegue = {
    pseudo: 'pseudo',
    photoUrl: 'https://picsum.photos/200/200',
    score: 1000,
  };
}
