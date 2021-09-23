import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

import { DespesasTableComponent } from './Components/despesas-table/despesas-table.component';
import { TotaisTable } from './Components/totais-table/totais-table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DespesasGraficoComponent } from './Components/despesas-grafico/despesas-grafico.component';


const routes: Routes = [{ path: '', component: DespesasTableComponent }];

@NgModule({
  declarations: [AppComponent, DespesasTableComponent, TotaisTable, DespesasGraficoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxChartsModule,
    FormsModule,
    RouterModule.forChild([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
