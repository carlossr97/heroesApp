import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { heroes } from 'src/app/interfaces/heroes';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: heroes
  ) { }

  ngOnInit(): void {
  }

  cancelar(){
    
    this.dialogRef.close();
  }

  borrar(){
 
    this.dialogRef.close(true);
  }
}
