import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[appPseudoValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: PseudoValidatorDirective,
      multi: true,
    },
  ],
})
export class PseudoValidatorDirective implements AsyncValidator {
  constructor(private dataSrv: DataService) { }

  validate(control: AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.dataSrv
      .getCollegueByPseudo(control.value)
      .pipe(map((x:Collegue) =>{
        return x ? { pseudoExists: true } : null
      }
      ));

  // validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //   // if (!control.value) return of(null) // retourne observable de null si controle vide (facultatif ?)

  //   return this.dataSrv
  //     .getCollegueByPseudo(control.value)
  //     .pipe(
  //       tap(data => console.log(data)), // pour voir le résultat sans le transformer
  //       map((x: Collegue) => x ? { pseudoExists: true } : null), // retourne objet si pseudo trouvé (x: collegue est facultatif ()=> { pseudoExists: true } )
  //       tap(data => console.log(data)), // pour voir le résultat sans le transformer
  //       // catchError(() => of(null)) // retourne null si erreur déclenché par pseudo non trouvé
  //     );
  }
}
