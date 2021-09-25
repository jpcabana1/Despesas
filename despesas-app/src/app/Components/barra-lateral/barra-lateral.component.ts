import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css'],
})
export class BarraLateralComponent implements OnInit {
  hidden: boolean = window.outerWidth < 758 || window.outerWidth < 758;
  constructor() {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.hidden = window.outerWidth < 758 || window.outerWidth < 758;
  }
}
