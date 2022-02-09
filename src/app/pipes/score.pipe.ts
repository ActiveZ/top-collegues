import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score',
})
export class ScorePipe implements PipeTransform {
  transform(unsignedScore: number): string {
    return (unsignedScore >= 0 ? '+ ' : '- ') + Math.abs(unsignedScore).toString();
  }
}
