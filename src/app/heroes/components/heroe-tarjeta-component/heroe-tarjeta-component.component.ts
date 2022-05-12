import { Component, Input, OnInit } from '@angular/core';
import { heroes } from 'src/app/interfaces/heroes';

@Component({
  selector: 'app-heroe-tarjeta-component',
  templateUrl: './heroe-tarjeta-component.component.html',
  styles: [`
    .mat-card{
    margin-top:20px;}
    .example-header-image {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFtq36CidCQvsNLB2IeGv-lsoFGcqkC_cNg&usqp=CAU');
  background-size: cover;}
  `
  ]
})
export class HeroeTarjetaComponentComponent implements OnInit {
  @Input() heroe!:heroes
  constructor() { }

  ngOnInit(): void {
  }

}
