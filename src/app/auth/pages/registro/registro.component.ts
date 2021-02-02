import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattenr = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattenr)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.noPuedeSer123456]]
  });

  noPuedeSer123456(control: FormControl): any {
    const valor = control.value?.trim().toLowerCase();
    if (valor === '123456') {
      return {
        no123456: true
      };
    }
    return null;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoValido(campo: string): any {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submit(): void {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
