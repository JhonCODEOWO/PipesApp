import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase' //Id para colocar en el HTML
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, apply: boolean): string {
        return (apply)? value.toUpperCase(): value;
    }
}