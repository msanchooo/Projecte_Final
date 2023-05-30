import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadesTreballadorsService } from '../datos/dades-treballadors.service';
import {Util} from '../utilidades/util';

@Component({
  selector: 'app-treballador-form',
  templateUrl: './treballador-form.component.html',
  styleUrls: ['./treballador-form.component.css']
})
export class TreballadorFormComponent {
  constructor(
    private treballadorService: DadesTreballadorsService,
    private router: Router,
    private formBuilder: FormBuilder

  ) {
    this.myForm = new FormGroup({
    });
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({

      nom: ['', [Validators.required, Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]+$/)]],
      cognoms: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-zA-Z ]+$/)]],
      nif: ['', [Validators.required]],
      sou: [, [Validators.required,Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      carrec: ['', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]

    });
    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm,this.formErrors,this.validationMessages);
    });
  }

  myForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {
    nom: '',
    cognoms: '',
    nif: '',
    sou: '',
    carrec: '',
    email: '',
    password: ''
  };

  validationMessages: any = {
    nom: {
      required: 'El nombre es obligatorio.',
      maxlength: 'El nombre no puede tener más de 15 caracteres.',
    },
    cognoms: {
      required: 'Los apellidos son obligatorios.',
      maxlength: 'Los apellidos no pueden tener más de 25 caracteres.',
      pattern:'El apellido no puede contener numeros'
    },
    nif: {
      required: 'El NIF es obligatorio.'
    },
    sou: {
      required: 'El sueldo es obligatorio.',
      pattern:'El sueldo no puede contener letras'
    },
    carrec: {
      required: 'El cargo es obligatorio.',
      pattern:'El cargo no puede contener numeros'
    },
    email: {
      required: 'El correo electrónico es obligatorio.',
      email: 'El correo electrónico no es válido.'
    },
    password: {
      required: 'La contraseña es obligatoria.',
      minlength: 'La contraseña debe tener al menos 6 caracteres.',
      maxlength: 'La contraseña no puede tener más de 15 caracteres.'
    }
  };

  mostrarContrasenya: boolean = false;

  mostrarOcultarContrasenya() {
    this.mostrarContrasenya = !this.mostrarContrasenya;
  }

  onSubmit(treballador: any) {
    Util.onValueChanged(true,this.myForm,this.formErrors,this.validationMessages);
    if (this.myForm.invalid) {
      return;
    }
    
    this.treballadorService.postTreballador(treballador).subscribe({
      next: (data) => {
        this.router.navigate(['treballador-list'])
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });


  }

}
