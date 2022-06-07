import { Component, OnInit } from '@angular/core';
import { heroes, Publisher } from 'src/app/interfaces/heroes';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publisher= [
  {
    id: 'DC Comics',
    desc: 'DC - Comics'
  },
  {
    id: 'Marvel Comics',
    desc: 'Marvel - Comics'
  }
  ];

  heroe:heroes={
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: '',
};

  constructor(
    private heroeService:HeroesService
  ) { }

  ngOnInit(): void {
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0 ){
      return;
    }
    this.heroeService.agregarHeroe(this.heroe).subscribe(
      resp=>{
        console.log(resp);
      }
    )
  }
}
