import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Luis';
  public gender: 'Male' | 'Female' = 'Male';

  public invitationMap = {
    Male: 'invitarlo',
    Female: 'invitarla',
  };

  ChangeClient(): void {
    this.name = 'Melissa';
    this.gender = 'Female';
  }

  //i18nPlural
  public clients: string[] = [
    'María',
    'Fernando',
    'Roberto',
    'Luis',
    'Cecilia',
    'Jorge',
    'Juan',
    'Tawel',
    'Alín',
    'Javier',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un clientes esperando.',
    '=2': 'tenemos 2 esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Luis',
    age: 25,
  };

  //Async Pipe => el observable se destruye al cambiar de pantalla
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((count) => console.log('count', count))
  );

  //de esta forma la promesa se ejecutara aunque cambie de pantalla
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola Mundo');
      console.log('La promesa se sigue disparando');
    }, 3000);
  });
}
