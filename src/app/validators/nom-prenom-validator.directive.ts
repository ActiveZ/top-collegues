import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appNomPrenomValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NomPrenomValidatorDirective,
    multi: true}]
})
export class NomPrenomValidatorDirective {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value.nom != control.value.prenom ? null : { nomPrenomIdentique: true };
  }
}
