import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nouveau-collegue-reactive-form',
  templateUrl: './nouveau-collegue-reactive-form.component.html',
  styleUrls: ['./nouveau-collegue-reactive-form.component.scss'],
})
export class NouveauCollegueReactiveFormComponent {
  creerColForm: FormGroup;
  msgErreur: string | undefined;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.creerColForm = this.fb.group(
      {
        pseudo: [
          '',
          {
            validators: [Validators.required],
            // asyncValidators: [this.pseudoValidator.bind(this)],
          },
        ],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        photo: ['', Validators.required],
      },
      {
        // validators: [this.nomPrenomValidator],
        asyncValidators: [],
      }
    );
  }

  ngOnInit() {}

  pseudoValidator(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    if (!control.value) {
      return of(null);
    }

    return this.dataService
      .getCollegueByPseudo(control.value)
      .pipe(map((col) => (!col ? null : { pseudoTrouve: true })));
  }

  nomPrenomValidator(control: AbstractControl): ValidationErrors | null {
    const nomCtrl = control.get('nom');
    const prenomCtrl = control.get('prenom');

    if (!nomCtrl || !prenomCtrl) {
      return null;
    } else {
      const nomSaisie = nomCtrl.value;
      const prenomSaisie = prenomCtrl.value;

      console.log(nomSaisie, prenomSaisie);
      return nomSaisie && nomSaisie === prenomSaisie
        ? { nomPrenomIdentique: true }
        : null;
    }
  }

  get pseudo() {
    return this.creerColForm.get('pseudo');
  }

  get nomError() {
    const control = this.creerColForm.get('nom');
    return control && control.dirty && control.invalid;
  }

  get prenomError() {
    const control = this.creerColForm.get('prenom');
    return control && control.dirty && control.invalid;
  }

  get photoError() {
    const control = this.creerColForm.get('photo');
    return control && control.dirty && control.invalid;
  }

  creer() {
    this.dataService.postCollegue(<Collegue>this.creerColForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['accueil']);
      },
      error: () => (this.msgErreur = 'Ooops, erreur back'),
    });
  }
}
