import { Component, HostListener, OnInit } from '@angular/core';
import {
  faFileInvoice,
  faGasPump,
  faList,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-depesas-navbar',
  templateUrl: './depesas-navbar.component.html',
  styleUrls: ['./depesas-navbar.component.css'],
})
export class DepesasNavbarComponent implements OnInit {
  invoice = faFileInvoice;
  gas = faGasPump;
  list = faList;
  line = faChartLine

  small: boolean = window.outerWidth < 758 || window.outerWidth < 758;

  constructor() {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.small = window.outerWidth < 758 || window.outerWidth < 758;
  }

}
