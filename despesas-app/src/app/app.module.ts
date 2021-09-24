import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDrawerContainer,MatDrawer } from '@angular/material/sidenav';




import { DespesasTableComponent } from './Components/despesas-table/despesas-table.component';
import { TotaisTable } from './Components/totais-table/totais-table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DespesasGraficoComponent } from './Components/despesas-grafico/despesas-grafico.component';
import { BarraLateralComponent } from './Components/barra-lateral/barra-lateral.component';
import { DepesasNavbarComponent } from './Components/depesas-navbar/depesas-navbar.component';
import { DespesasDashboardComponent } from './Components/despesas-dashboard/despesas-dashboard.component'
const routes: Routes = [
  { path: '', component: DespesasDashboardComponent },
  { path: 'lista', component: DespesasTableComponent },
  { path: 'cadastro', component: DespesasGraficoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DespesasTableComponent,
    TotaisTable,
    DespesasGraficoComponent,
    BarraLateralComponent,
    DepesasNavbarComponent,
    DespesasDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDrawerContainer,
    MatDrawer,
    NgxChartsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
