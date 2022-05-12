import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { heroes } from 'src/app/interfaces/heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private httpClient:HttpClient
  ) { }


  getHeroes(){
    return this.httpClient.get<heroes[]>('http://localhost:3000/heroes') // esto regresara un observable.
  }
}
