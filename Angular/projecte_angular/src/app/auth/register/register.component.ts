import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ServeiUpdateService } from '../../servei-update/servei-update.service';
import { AuthenticationService } from '../_services/authentication.service';
import { DadesClientsService } from '../../datos/dades-clients.service';
import { Util } from 'src/app/utilidades/util';

@Component({
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private service: ServeiUpdateService,
    private clientService: DadesClientsService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
       nom: [null, [Validators.required, Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]+$/)]],
       cognoms: [null, [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-zA-Z ]+$/)]],
       nif: [null,[Validators.required]],
       direccio: [null,Validators.required],
       movil: [null,[Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
       email: [null, [Validators.required, Validators.email]],
       password: [null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    });
    this.registerForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.registerForm,this.formErrors,this.validationMessages);
    });
  }
  
  formErrors: any = {
    nom: '',
    cognoms: '',
    nif: '',
    direccio: '',
    movil: 0,
    email: '',
    password: ''
  };

  validationMessages: any = {
    nom: {
      required: 'El nombre es obligatorio.',
      maxlength: 'El nombre no puede tener más de 15 caracteres.',
      pattern:'El nombre no puede contener numeros'
    },
    cognoms: {
      required: 'Los apellidos son obligatorios.',
      maxlength: 'Los apellidos no pueden tener más de 25 caracteres.',
      pattern:'El apellido no puede contener numeros'
    },
    nif: {
      required: 'El NIF es obligatorio.'
    },
    direccio: {
      required: 'La dirección es obligatoria.',
    },
    movil: {
      required: 'El movil es obligatorio.',
      pattern:'El movil no puede contener letras'
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

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit(credencials: any) {
    Util.onValueChanged(false, this.registerForm,this.formErrors,this.validationMessages);
    this.submitted = true;
    this.error = '';

     if (this.registerForm.invalid) {
       return;
     }
    
    
    this.loading = true;
    this.authenticationService
      .register(credencials)
      .subscribe({
        next: (credencials) => {
          const returnUrl = '/login';
          this.router.navigate([returnUrl]);
        },
        error: (error) => {
          this.error = error.message;
          this.loading = false;
        },
      });
  }

  mostrarContrasenya: boolean = false;

  mostrarOcultarContrasenya() {
    this.mostrarContrasenya = !this.mostrarContrasenya;
  }
}
