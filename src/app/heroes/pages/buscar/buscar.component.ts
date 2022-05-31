import { Component, OnInit } from '@angular/core';
import { heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino:string='';
  heroes:heroes[]=[];
  constructor(
    private heroeService:HeroesService
  ) { }

  ngOnInit(): void {
  }
  
  buscador(){
    // this.heroeService.getHeroes.s
  }

}
