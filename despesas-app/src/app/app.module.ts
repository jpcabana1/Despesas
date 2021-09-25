import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { DespesasTableComponent } from './Components/despesas-table/despesas-table.component';
import { TotaisTable } from './Components/totais-table/totais-table.component';
import { DespesasGraficoComponent } from './Components/despesas-grafico/despesas-grafico.component';
import { BarraLateralComponent } from './Components/barra-lateral/barra-lateral.component';
import { DepesasNavbarComponent } from './Components/depesas-navbar/depesas-navbar.component';
import { DespesasDashboardComponent } from './Components/despesas-dashboard/despesas-dashboard.component';
import { CadastroDespesaComponent } from './Components/cadastro-despesa/cadastro-despesa.component';
import { IconeCategoriaComponent } from './Components/icone-categoria/icone-categoria.component';
import { CadastroCategoriaComponent } from './Components/cadastro-categoria/cadastro-categoria.component';

const routes: Routes = [
  { path: '', component: DespesasDashboardComponent },
  { path: 'lista', component: DespesasTableComponent },
  { path: 'cadastro', component: CadastroDespesaComponent },
  { path: 'dashboard', component: DespesasDashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DespesasTableComponent,
    TotaisTable,
    DespesasGraficoComponent,
    BarraLateralComponent,
    DepesasNavbarComponent,
    DespesasDashboardComponent,
    CadastroDespesaComponent,
    IconeCategoriaComponent,
    CadastroCategoriaComponent,
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
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    NgxChartsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
