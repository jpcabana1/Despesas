import { Component, OnInit } from '@angular/core';
import { IconeService } from 'src/app/Services/Icone/Icone.service';
import {
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css'],
})
export class CadastroCategoriaComponent implements OnInit {
  icones: any[] | undefined;
  plus: any;
  profileForm: FormGroup;

  constructor(
    private iconService: IconeService,
    private formBuilder: FormBuilder
  ) {
    this.profileForm = this.formBuilder.group({
      categoria: ['', Validators.required],
      nomeIcone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.icones = [...this.iconService.categorias];
    this.plus = this.iconService.selectIcon('faPlus');
  }

  setIcone(value: any): void {
    this.profileForm.setValue({
      nomeIcone: value.iconName,
      categoria: this.profileForm.get('categoria')?.value,
    });
    console.log(this.profileForm.value);
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('POST', this.profileForm.value);
    }
  }
}
