import { Component, OnInit } from '@angular/core';
import { IconeService } from 'src/app/Services/Icone/Icone.service';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css'],
})
export class CadastroCategoriaComponent implements OnInit {
  icones: any[] | undefined;
  plus = this.iconService.selectIcon('faPlus');

  profileForm = this.formBuilder.group({
    categoria: ['', Validators.required],
    nomeIcone: ['', Validators.required],
  });
  constructor(
    private iconService: IconeService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.icones = [...this.iconService.icons];
  }

  setIcone(value: any) {
    this.profileForm.setValue({
      nomeIcone: value.iconName,
      categoria: this.profileForm.get('categoria')?.value,
    });
    console.log(this.profileForm.value);
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('POST', this.profileForm.value);
    }
  }
}
