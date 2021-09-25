import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icone-categoria',
  templateUrl: './icone-categoria.component.html',
  styleUrls: ['./icone-categoria.component.css'],
})
export class IconeCategoriaComponent implements OnInit {
  @Input() icone: any;

  constructor() {}

  ngOnInit() {}
}
