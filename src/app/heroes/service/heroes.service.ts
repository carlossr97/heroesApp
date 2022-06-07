import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { heroes } from 'src/app/interfaces/heroes';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseURL:string = environment.baseURL;
  
  constructor(
    private httpClient:HttpClient
  ) { }


  getHeroes(){
    return this.httpClient.get<heroes[]>(`${ this.baseURL }/heroes`) // esto regresara un observable.
  };

  
  getHeroe(heroe:string){
    return this.httpClient.get<heroes>(`${ this.baseURL }/heroes/${ heroe }`); 
  }

  getSugerencia(termino:string){
    return this.httpClient.get<heroes[]>(`${ this.baseURL }/heroes?q=${ termino }`); 
  }

  agregarHeroe(heroe:heroes){
    return this.httpClient.post( `${ this.baseURL }/heroes`,heroe);
  }
  
  actualizarHeroe(heroe:heroes){
    return this.httpClient.put(`${ this.baseURL }/heroes/${heroe.id}`,heroe);
  }


}
