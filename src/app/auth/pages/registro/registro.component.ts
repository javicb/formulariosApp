import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
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
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.noPuedeSer123456]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required) {
      return 'Email obligatorio';
    } else if (errors?.pattern) {
      return 'Formato incorrecto';
    } else if (errors?.emailExiste) {
      return 'Ya existe el email';
    }

    return '';
  }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
  }

  campoValido(campo: string): boolean | undefined {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submit(): void {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
