import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaEnum } from 'src/app/Enums/categoria-enum.enum';
import { IconeService } from 'src/app/Services/Icone/Icone.service';
import { CadastroCategoriaComponent } from '../cadastro-categoria/cadastro-categoria.component';

@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css'],
})
export class CadastroDespesaComponent implements OnInit {
  selected: string;
  iconeNovaCategoria: any;
  iconeSalvar: any;
  formDespesa: FormGroup;
  constructor(
    public dialog: MatDialog,
    private IService: IconeService,
    private formBuilder: FormBuilder
  ) {
    this.selected = 'Pessoal';
    this.formDespesa = this.formBuilder.group({
      dtCreate: [new Date(), Validators.required],
      valor: [
        '',
        [Validators.pattern('^(?=.*[1-9])\\d*.?\\d+$'), Validators.required],
      ],
      nome: ['', Validators.required],
      categoria: [this.selected],
    });
  }

  ngOnInit(): void {
    this.iconeNovaCategoria = this.IService.selectIcon(CategoriaEnum.faPlus);
    this.iconeSalvar = this.IService.selectIcon(CategoriaEnum.faSave);
    console.log(new Date().toDateString());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroCategoriaComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(): void {
    console.log(this.formDespesa.value);
  }
}
