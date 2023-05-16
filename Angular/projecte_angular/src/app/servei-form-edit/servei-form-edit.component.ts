import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesServeisService } from '../datos/dades-serveis.service';
import { IServei } from '../interfaces/IServei';
import { Util } from '../utilidades/util';

@Component({
  selector: 'app-servei-form-edit',
  templateUrl: './servei-form-edit.component.html',
  styleUrls: ['./servei-form-edit.component.css']
})
export class ServeiFormEditComponent implements OnInit {
  post: any = '';
  id: string | null = '';
  confirmacio: string = '';
  headers: any;
  myForm: FormGroup = this.formBuilder.group({});
  servei: IServei = {
    id: 0,
    nom: '',
    preu: 0,
    durada: 0
  };

  constructor(
    private ruta: ActivatedRoute,
    private serveiService: DadesServeisService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.getServei(this.id);
    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm, this.formErrors, this.validationMessages);

    });
  }
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
      required: 'La durada es obligatoria.',
      maxlength: 'La durada no puede ser más larga que 25 caracteres.',
      pattern: 'La duracion solo pueden contener letras'
    },
  };

  getServei(id: string | null) {
    this.serveiService.getServei(id).subscribe(data => {
      this.servei = data;
      this.myForm.setValue({
        nom: data.nom,
        preu: data.preu,
        durada: data.durada
      });
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      nom: ['Pastillas Traseras', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-zA-Z ]+$/)]],
      preu: ['70', [Validators.required,Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      durada: [1, [Validators.required,Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]]
    });
  }

  onSubmit(): void {
    Util.onValueChanged(true, this.myForm, this.formErrors, this.validationMessages);

    const formData = new FormData();
    const nom = this.myForm.get('nom')?.value;
    const preu = this.myForm.get('preu')?.value;
    const durada = this.myForm.get('durada')?.value;
    if (nom) formData.append('nom', nom);
    if (preu) formData.append('preu', preu);
    if (durada) formData.append('durada', durada);

    const ps = this.serveiService.putServei(this.id, formData);
    ps.subscribe(
      (resp) => {
        this.post = resp;
        if (resp.status == '200') {
          this.confirmacio = 'Servicio actualizado correctamente';
          this.router.navigate(['servei-list']);
        } else {
          this.confirmacio = 'ERROR ' + resp.status;
        }
      },
      (error) => {
       // alert('Error: ' + error.message); // podríamos mostrar el error en html
      });

  }


}




