import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { heroes, Publisher } from 'src/app/interfaces/heroes';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
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
    private router:Router,
    private snackbar:MatSnackBar,
    private matDialog:MatDialog
  ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      this.showButton=true;
      return;
    }
    this.activatedRoute.params
    .pipe(
      switchMap(({id })=> this.heroeService.getHeroe(id))
      ).subscribe(
        heroe => this.heroe = heroe
      
      );
    

  }

  guardar(){

   
    if(this.heroe.superhero.trim().length === 0 ){
      return;
    }
    else if (this.heroe.id === undefined){
      
      this.heroeService.agregarHeroe(this.heroe).subscribe(
      (resp:any)=>{
        
        this.router.navigate(['/heroes',resp.id]);
        this.mostrarSnackbar('Registro Creado')
        console.log(this.heroe.id);
        console.log(resp);

      }
    )
    }
    else{
    
      this.heroeService.actualizarHeroe(this.heroe).subscribe(
        resp => this.mostrarSnackbar('Registro actualizado')
      )
    }
  }

  borrar(id:any){
    const dialog =this.matDialog.open(ConfirmarComponent,{
      width:'250px',
      data: this.heroe
    })

    dialog.afterClosed().subscribe(
      resp=>{
        if(resp) {
          this.heroeService.borrarHeroe(id).subscribe(
            resp => {
              console.log("se elimino el heroe",resp);
              this.router.navigate(['heroes','listado']);
            }
          )
        }
        
      }
    )
  
    }
 
  mostrarSnackbar(mensaje:string){
    this.snackbar.open( mensaje,'Aceptar',{
      duration: 2500
    } )
  }

}
