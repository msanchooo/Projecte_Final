import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadesServeisService } from '../datos/dades-serveis.service';
import { Util } from '../utilidades/util';

@Component({
  selector: 'app-servei-form',
  templateUrl: './servei-form.component.html',
  styleUrls: ['./servei-form.component.css']
})
export class ServeiFormComponent implements OnInit {
  constructor(
    private ServeiService: DadesServeisService,
    private router: Router,
    private formBuilder: FormBuilder

  ) {
    this.myForm = new FormGroup({
    });
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({

      nom: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-zA-Z ]+$/)]],
      preu: ['', [Validators.required,Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      durada: ['', [Validators.required,Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]]
    });
    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm,this.formErrors,this.validationMessages);

    });
  }
  myForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {
    nom: '',
    marca: '',
    preu: '',
    durada: 0
  };

  validationMessages: any = {
    nom: {
      required: 'El nombre es obligatoria.',
      maxlength: 'El nombre no puede ser más largo que 25 caracteres.',
      pattern: 'El nombre solo pueden contener letras'
    },
    preu: {
      required: 'El precio es obligatoria.',
      maxlength: 'El precio no puede ser más largo que 25 caracteres.',
      pattern: 'El precio solo pueden contener numeros'
    },
    durada: {
      required: 'La duradacion es obligatoria.',
      maxlength: 'La duracion no puede ser más larga que 25 caracteres.',
      pattern: 'La duracion solo pueden contener numeros'
    },
  };

  onSubmit(servei: any) {

    Util.onValueChanged(true, this.myForm,this.formErrors,this.validationMessages);
    if (this.myForm.invalid) {
      return;
    }


    console.log(servei);

    this.ServeiService.postServei(servei).subscribe({
      next: (data) => {
        this.router.navigate(['servei-list'])
      },
      error: (error) => {
       // this.errorMessage = error.message;
      }
    });

  }
}