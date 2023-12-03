import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'roundNumber',
})
export class RoundNumberPipe implements PipeTransform {
  transform(value: number, places: number = 0) {
    return this.roundNumber(value, places);
  }

  private roundNumber(value: number, places = 0): number {
    if (places === 0) {
      return Math.round(value);
    }

    value *= Math.pow(10, places);
    value = Math.round(value);
    return value / Math.pow(10, places);
  }
}
