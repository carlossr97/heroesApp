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
  heroeSeleccionado!:heroes;
  HayError!:boolean;

  constructor(
    private heroeService:HeroesService
  ) { }

  ngOnInit(): void {
    
  }
  
  buscador(){
    this.heroeService.getSugerencia(this.termino).subscribe(
      heroe=>{
        this.heroes=heroe;
        if(heroe.length === 0){
          this.HayError=true;
        }
        else{
          this.HayError=false;
        }
      }
    )
  }

  opcionSeleccionada( event:any ){
  const heroe:heroes = event.option.value;
  this.termino=heroe.superhero;
  this.heroeService.getHeroe(heroe.id!).subscribe(
    heroe=>{
      this.heroeSeleccionado=heroe;
      
    }
  )   
  }

}
