import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadesServeisService } from '../datos/dades-serveis.service';

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

      nom: ['Pastillas Traseras', [Validators.required, Validators.maxLength(25)]],
      preu: ['70', Validators.required],
      durada: [1, Validators.required]
    });
    this.myForm.valueChanges.subscribe(() => {
      this.onValueChanged();
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
      required: 'El nombre es obligatoria.',
      maxlength: 'El nombre no puede ser más largo que 25 caracteres.'
    },
    preu: {
      required: 'El precio es obligatoria.',
      maxlength: 'El precio no puede ser más largo que 25 caracteres.'
    },
    durada: {
      required: 'La durada es obligatoria.',
      maxlength: 'La durada no puede ser más larga que 25 caracteres.'
    },
  };

  onSubmit(servei: any) {

    this.onValueChanged();

    console.log(servei);

    this.ServeiService.postServei(servei).subscribe({
      next: (data) => {
        this.router.navigate(['servei-list'])
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });

  }
}