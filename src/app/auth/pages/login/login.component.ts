import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private auth:AuthService                      ) { }

  ngOnInit(): void {
  }

  login(){


    this.auth.login().subscribe(
      ({id}) =>{console.log("respuesta: ",id)
      if(id > 0){
         this.router.navigate(['./heroes']);
      }
     
    },
    (error)=>{
      alert("ERROR EN LA PETICION")
    }
    )
    // this.router.navigate(['./heroes']);

  }

  
}

