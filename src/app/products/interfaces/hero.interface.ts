export enum Color {
  RED,
  GREEN,
  BLUE,
  BLACK,
}

export interface IHero {
  name: string;
  canFly: boolean;
  color: Color;
}
