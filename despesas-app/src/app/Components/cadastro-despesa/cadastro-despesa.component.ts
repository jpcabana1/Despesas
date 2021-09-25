import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CadastroCategoriaComponent } from '../cadastro-categoria/cadastro-categoria.component';


@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css'],
})
export class CadastroDespesaComponent implements OnInit {
  selected = 'Pessoal';
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CadastroCategoriaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {}
}
