import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
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
  constructor(private dataSrv: DataService) {}

  validate(control: AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.dataSrv
      .getCollegueByPseudo(control.value)
      .pipe(map((x:Collegue) =>{
        return x ? { pseudoExists: true } : null
      }
      ));
  }
}
