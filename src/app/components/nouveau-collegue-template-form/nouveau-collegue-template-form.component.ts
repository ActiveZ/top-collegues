import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss'],
})

export class NouveauCollegueTemplateFormComponent {
  newCollegue: Partial<Collegue> = {};
  msgErreur?: string;
  msgOk?: string;

  constructor(private dataSrv: DataService, private router: Router) {}

  submit(formCollegue: NgForm) {
    // pour form reset
    this.msgOk = undefined;
    this.msgErreur = undefined;

    this.dataSrv.postCollegue(this.newCollegue).subscribe({
      next: (data) => {
        console.log(data);
        this.msgOk = 'Collegue créé avec succès !';
        this.newCollegue = {};
        formCollegue.reset(); // réinitialiser les informations de validation, utile ?
        this.router.navigate(['accueil']);
      },
      error: () => (this.msgErreur = 'Ooops, erreur back'),
    });
  }
}
