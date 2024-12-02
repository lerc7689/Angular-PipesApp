import { Component } from '@angular/core';
import { IHero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'order-custom-pipes',
  templateUrl: './order-custom-pipes.component.html',
  styleUrl: './order-custom-pipes.component.css',
})
export class OrderCustomPipesComponent {
  public isUpperCase: boolean = false;
  public orderByValue: keyof IHero = 'name';

  changeOrder(value: keyof IHero): void {
    this.orderByValue = value;
  }

  public heroes: IHero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.BLUE,
    },
    {
      name: 'Iron Man',
      canFly: true,
      color: Color.RED,
    },
    {
      name: 'Captain America',
      canFly: false,
      color: Color.RED,
    },
    {
      name: 'Thor',
      canFly: true,
      color: Color.RED,
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.GREEN,
    },
    {
      name: 'Black Widow',
      canFly: false,
      color: Color.BLACK,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.BLACK,
    },
  ];

  toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
