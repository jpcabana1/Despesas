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

  thumbtack = faThumbtack;
  exchangeAlt = faExchangeAlt;
  male = faMale;
  moneyBill = faMoneyBillWaveAlt;

  constructor(private despesasService: DespesasService) {}

  ngOnInit() {
    this.despesasService.getDespesas().subscribe((res) => {
      this.despesas = res;
      console.log(this.despesas);
      console.log(this.despesas.length === 0);
    });
  }
}
