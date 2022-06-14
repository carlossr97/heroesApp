import { Pipe, PipeTransform } from '@angular/core';
import { heroes } from 'src/app/interfaces/heroes';

@Pipe({
  name: 'heroe'
})
export class HeroePipe implements PipeTransform {

  transform(heroe:heroes): string | undefined {
    
    let img = heroe.alt_image;
    
    if (img?.charAt(0) === 'h') {
      return heroe.alt_image  
    }
  
    else {
      return `assets/heroes/${heroe.id}.jpg`;
    }    
    
  }
}
