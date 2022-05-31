import { Pipe, PipeTransform } from '@angular/core';
import { heroes } from 'src/app/interfaces/heroes';

@Pipe({
  name: 'heroe'
})
export class HeroePipe implements PipeTransform {

  transform(heroe:heroes): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
