import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClient } from '../interfaces/IClient';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesClientsService } from '../datos/dades-clients.service';
import { Util } from '../utilidades/util';

@Component({
  selector: 'app-client-form-edit',
  templateUrl: './client-form-edit.component.html',
  styleUrls: ['./client-form-edit.component.css']
})
export class ClientFormEditComponent {
  post: any = '';
  id: string | null = '';
  confirmacio: string = '';
  headers: any;
  myForm: FormGroup = this.formBuilder.group({});
  client: IClient = {
    id: 0,
    nom: '',
    cognoms: '',
    nif: '',
    direccio: '',
    movil: 0,
    user: { id: 0, email: '', password: '', rol: 0 },
  };

  formErrors: any = {
    nom: '',
    cognoms: '',
    nif: '',
    movil: '',
    direccio: '',
    email: ''
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
    movil: {
      required: 'El telefono es obligatorio.',
      pattern:'El telefono no puede contener letras'
    },
    direccio: {
      required: 'La direccion es obligatoria.',

    },
    email: {
      required: 'El correo electrónico es obligatorio.',
      email: 'El correo electrónico no es válido.'
    }
  };

  constructor(
    private ruta: ActivatedRoute,
    private clientService: DadesClientsService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {

    this.createForm();
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.getClient(this.id);
    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm, this.formErrors, this.validationMessages);
    });

  }
  createForm(): void {
    this.myForm = this.formBuilder.group({

      nom: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[a-zA-Z ]+$/)]],
      cognoms: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-zA-Z ]+$/)]],
      nif: ['', [Validators.required]],
      direccio: [, [Validators.required]],
      movil: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getClient(id: string | null) {
    this.clientService.getClient(id).subscribe(data => {
      this.client = data;
      this.myForm.setValue({
        nom: data.nom,
        cognoms: data.cognoms,
        nif: data.nif,
        direccio: data.direccio,
        email: data.user.email,
        movil: data.movil,
      });
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  onSubmit(): void {
    
    Util.onValueChanged(true, this.myForm,this.formErrors,this.validationMessages);
    if (this.myForm.invalid) {
      return;
    }

    const formData = new FormData();
    const nom = this.myForm.get('nom')?.value;
    const cognoms = this.myForm.get('cognoms')?.value;
    const nif = this.myForm.get('nif')?.value;
    const direccio = this.myForm.get('direccio')?.value;
    const movil = this.myForm.get('movil')?.value;
    const user_id = this.client.user.id;
    const email = this.myForm.get('email')?.value;
    
    if (nom) formData.append('nom', nom);
    if (cognoms) formData.append('cognoms', cognoms);
    if (nif) formData.append('nif', nif);
    if (direccio) formData.append('direccio', direccio);
    if (movil) formData.append('movil', movil);
    if (user_id) formData.append('user_id', user_id.toString());
    if (email) formData.append('email', email);

    console.log(formData);
    const ps = this.clientService.postClient(formData);
    ps.subscribe(
      (resp) => { 
        this.post = resp;
          this.router.navigate(['client-list']);
      },
      (error) => {  
        alert('Error: ' + error.message); // podríamos mostrar el error en html
      });      
  }

}
