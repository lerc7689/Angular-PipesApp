import { Pipe, PipeTransform } from '@angular/core';

//Este pipe sirve para convertir una cadena de minúscula a mayúscula y viceversa

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
