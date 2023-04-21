import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadesTreballadorsService } from '../datos/dades-treballadors.service';

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

      nom: ['Juan', [Validators.required, Validators.maxLength(15)]],
      cognoms: ['Cuesta', [Validators.required, Validators.maxLength(25)]],
      nif: ['1565176A', [Validators.required]],
      sou: [1300, [Validators.required]],
      carrec: ['Ayudante', [Validators.required]],
      email: ['juancuesta@yahoo.es', [Validators.required, Validators.email]],
      password: ['juancuesta', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]

    });
    this.myForm.valueChanges.subscribe(() => {
      this.onValueChanged();
    });
  }

  myForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {
    nom: '',
    cognoms: '',
    nif: '',
    sou: 0,
    carrec: '',
    email: '',
    password: ''
  };

  onValueChanged() {
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.myForm.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  validationMessages: any = {
    nom: {
      required: 'El nombre es obligatorio.',
      maxlength: 'El nombre no puede tener más de 15 caracteres.'
    },
    cognoms: {
      required: 'Los apellidos son obligatorios.',
      maxlength: 'Los apellidos no pueden tener más de 25 caracteres.'
    },
    nif: {
      required: 'El NIF es obligatorio.'
    },
    sou: {
      required: 'El sueldo es obligatorio.'
    },
    carrec: {
      required: 'El cargo es obligatorio.'
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
    this.onValueChanged();

    console.log(treballador);

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
