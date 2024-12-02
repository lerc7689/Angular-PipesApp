import { Pipe, type PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: IHero[], sortBy: keyof IHero | null): IHero[] {
    switch (sortBy) {
      case 'name': {
        // return heroes.sort((a, b) => a.name.localeCompare(b.name));
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      case 'canFly': {
        // return heroes.sort((a, b) => a.canFly - b.canFly);
        return heroes.sort((a, b) => (a.canFly > b.canFly ? 1 : -1));
      }
      case 'color': {
        // return heroes.sort((a, b) => a.color.localeCompare(b.color));
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      }
      default: {
        return heroes;
      }
    }
  }

  sortByName(heroes: IHero[]) {
    return heroes.sort((a, b) => a.name.localeCompare(b.name));
  }
}
