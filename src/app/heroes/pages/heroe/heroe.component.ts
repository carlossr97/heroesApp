import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width:100%;
    border-radius: 5px;
    height:500px;
  }
  
`
    
  ]
})
export class HeroeComponent implements OnInit {
  heroeExiste:boolean=true;
  heroe!:string;
  heroeObj:heroes[]=[];
  constructor(
    private activatedRoute:ActivatedRoute,
    private heroeService:HeroesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params=>{
    //   this.heroe=params['id'];
    //   console.log("params: ",this.heroe);
    // })
    // this.heroeService.getHeroe(this.heroe).subscribe(heroe=>{
    //   this.heroeObj.push(heroe);
    // },
    // error=>{
    //   this.heroeExiste=false;
    // })
    
    // Con esta otra forma podemos simplificar el codigo usando un switchMap, donde a treves de la
    // desestructuracion traemos al id del activeroute y lo utilizamos para acceder a nuestro otro obsevable
    // de heroeService sin necesidad de utilizar dos subscribe, por ultimo los subscribimos y obtenemos el objeto heros. 

    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.heroeService.getHeroe(id))
      ).subscribe(heroe =>{
        this.heroeObj.push(heroe);
      }, (error=>{
        this.heroeExiste=false;
      })
      )

  }


  regresar(){
    this.router.navigate(['/heroes/listado']);
  }




}
