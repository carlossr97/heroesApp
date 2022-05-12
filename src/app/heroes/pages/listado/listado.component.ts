import { Component, OnInit } from '@angular/core';
import { heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
    
  

    `
  ]
})
export class ListadoComponent implements OnInit {

  heroes:heroes[]=[];

  constructor(
    private heroesService:HeroesService
  ) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
     .subscribe(
      resp =>{
        this.heroes=resp;
      }
    )
  }

  

}
