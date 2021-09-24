import { Component, OnInit } from '@angular/core';
import { TotalDTO } from 'src/app/DTO/TotalDTO';
import { TotalService } from 'src/app/Services/Total/Total.service';

import {
  faThumbtack,
  faExchangeAlt,
  faMale,
  faMoneyBillWaveAlt,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import { TotalRegistroDTO } from 'src/app/DTO/TotalRegistroDTO';

@Component({
  selector: 'app-totais-table',
  templateUrl: './totais-table.component.html',
  styleUrls: ['./totais-table.component.css'],
})
export class TotaisTable implements OnInit {
  
  totais: TotalRegistroDTO[] = [];
  loading: boolean = true;
  errorEx: any;

  thumbtack = faThumbtack;
  exchangeAlt = faExchangeAlt;
  male = faMale;
  moneyBill = faMoneyBillWaveAlt;
  dollar = faDollarSign;
  
  constructor(private totalService : TotalService) {}

  ngOnInit() {
    this.totalService.getTotalById(0).subscribe(
      (res: TotalDTO) => {
        this.loading = false;
        this.totais = [...res.totalRegistros];
      },
      (err) =>{
        this.loading = false;
        this.errorEx = err;
        console.log(err)
      }
    );
  }

}
