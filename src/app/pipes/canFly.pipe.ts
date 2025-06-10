import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value? 'Puede volar': 'No puede volar';
  }
}
