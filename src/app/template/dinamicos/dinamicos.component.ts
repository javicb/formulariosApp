import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log('click en el boton');
  }

}
