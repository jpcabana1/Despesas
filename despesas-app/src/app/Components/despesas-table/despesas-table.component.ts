import { Component, OnInit } from '@angular/core';
import { DespesasDTO } from 'src/app/DTO/DespesasDTO';
import { DespesasService } from '../../Services/Despesas/Despesas.service';

import {
  faThumbtack,
  faExchangeAlt,
  faMale,
  faMoneyBillWaveAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-despesas-table',
  templateUrl: './despesas-table.component.html',
  styleUrls: ['./despesas-table.component.css'],
})
export class DespesasTableComponent implements OnInit {
  despesas: DespesasDTO[] = [];
  loading: boolean = true;
  page: number = 1;
  pageSize: number = 8;
  maxSize: number = 5;

  errorMessage: string = '';
  thumbtack = faThumbtack;
  exchangeAlt = faExchangeAlt;
  male = faMale;
  moneyBill = faMoneyBillWaveAlt;

  constructor(private despesasService: DespesasService) {}

  ngOnInit() {
    this.carregarDespesas();
  }

  carregarDespesas() {
    this.despesasService.getDespesas().subscribe(
      (res: DespesasDTO[]) => {
        this.loading = false;
        this.despesas = [...res];
      },
      (erro) => {
        this.loading = false;
        console.log(erro.message);
        this.errorMessage = 'Não foi possível recuperar despesas!';
      }
    );
  }
}
