import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
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

showButton:boolean=false;

  constructor(
    private heroeService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id })=> this.heroeService.getHeroe(id))
      ).subscribe(
        heroe => this.heroe = heroe
      
      );
      if(this.router.url=== '/heroes/agregar'){
        this.showButton=true;
      }

  }

  guardar(){

   
    if(this.heroe.superhero.trim().length === 0 ){
      return;
    }
    else if (this.heroe.id === undefined){
      
      this.heroeService.agregarHeroe(this.heroe).subscribe(
      (resp:any)=>{

        this.router.navigate(['/heroes',resp.id]);
        console.log(this.heroe.id);
        console.log(resp);

      }
    )
    }
    else{
    
      this.heroeService.actualizarHeroe(this.heroe).subscribe(
        resp => console.log("update",resp)
      )
    }
  }

 
}
