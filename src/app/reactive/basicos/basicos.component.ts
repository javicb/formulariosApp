import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTW 4080'),
  //   precio: new FormControl(500),
  //   existencias: new FormControl(5),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080'],
    precio: [500],
    existencias: [5]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
