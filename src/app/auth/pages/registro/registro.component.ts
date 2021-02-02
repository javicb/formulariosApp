import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApelldoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.noPuedeSer123456]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) { }

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
