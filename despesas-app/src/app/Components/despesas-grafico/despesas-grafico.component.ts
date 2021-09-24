import { Component, OnInit } from '@angular/core';
import { Color, NgxChartsModule } from '@swimlane/ngx-charts';
import { TotalDTO } from 'src/app/DTO/TotalDTO';
import { TotalRegistroDTO } from 'src/app/DTO/TotalRegistroDTO';
import { TotalService } from 'src/app/Services/Total/Total.service';

@Component({
  selector: 'app-despesas-grafico',
  templateUrl: './despesas-grafico.component.html',
  styleUrls: ['./despesas-grafico.component.css'],
})
export class DespesasGraficoComponent implements OnInit {
  totais: TotalRegistroDTO[] = [];
  loading: boolean = true;
  errorEx: any;

  // options
  view: number[] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Tipo de despesa';
  yAxisLabel = 'Valores';
  showXAxisLabel = true;
  showYAxisLabel = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(private totalService: TotalService) {}
  ngOnInit(): void {
    this.totalService.getTotalById(0).subscribe(
      (res: TotalDTO) => {
        this.loading = false;
        this.totais = [...res.totalRegistros];
      },
      (err: any) => {
        this.loading = false;
        this.errorEx = err;
      }
    );
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
