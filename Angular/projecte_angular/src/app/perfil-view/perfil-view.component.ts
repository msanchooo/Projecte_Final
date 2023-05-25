import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesClientsService } from '../datos/dades-clients.service';
import { IClient } from '../interfaces/IClient';
import { Util } from '../utilidades/util';
import { ElementRef, Renderer2 } from '@angular/core';
import { ServeiUpdateService } from '../servei-update/servei-update.service';

@Component({
  selector: 'app-perfil-view',
  templateUrl: './perfil-view.component.html',
  styleUrls: ['./perfil-view.component.css']
})
export class PerfilViewComponent {
  constructor(
    private ruta: ActivatedRoute,
    private clientService: DadesClientsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private service: ServeiUpdateService,


  ) { }
  myForm: FormGroup = this.formBuilder.group({});
  id: any;
  email: any;
  user:any;
  boton: boolean = true;
  client: IClient = {
    id: 0,
    nom: '',
    cognoms: '',
    nif: '',
    user: { id: 0, email: '', password: '', rol: 0 },
    direccio: '',
    movil: 0
  };
  loading = false;
  errorMessage: string = '';
  formErrors: any = {
    nom: '',
    cognoms: '',
    nif: '',
    direccio: '',
    movil: null,
    email: '',
  };

  validationMessages: any = {
    nom: {
      required: 'El nombre es obligatorio.',
      maxlength: 'El nombre no puede tener más de 15 caracteres.',
      pattern: 'El nombre no puede contener numeros'
    },
    cognoms: {
      required: 'Los apellidos son obligatorios.',
      maxlength: 'Los apellidos no pueden tener más de 25 caracteres.',
      pattern: 'El apellido no puede contener numeros'
    },
    nif: {
      required: 'El NIF es obligatorio.'
    },
    direccio: {
      required: 'La dirección es obligatoria.',
    },
    movil: {
      required: 'El movil es obligatorio.',
      pattern: 'El movil no puede contener letras'
    },
    email: {
      required: 'El correo electrónico es obligatorio.',
      email: 'El correo electrónico no es válido.'
    }
  };


  ngOnInit(): void {
    const user = this.authenticationService.userValue;
    this.id = user?.id;
    this.email = user?.email;
    console.log(this.id);
    this.createForm();
    this.getClientByUserId(this.id);
    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm, this.formErrors, this.validationMessages);
    });

  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[a-zA-Z ]+$/)]],
      cognoms: ['', [Validators.required, Validators.maxLength(25), Validators.pattern(/^[a-zA-Z ]+$/)]],
      nif: ['', [Validators.required]],
      direccio: ['', Validators.required],
      movil: ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getClientByUserId(id: string | null) {
    this.clientService.getClientByUserId(id).subscribe(data => {
      this.client = data;
      console.log(data);
      this.myForm.setValue({
        nom: data.nom,
        cognoms: data.cognoms,
        nif: data.nif,
        direccio: data.direccio,
        movil: data.movil,
        email: this.email
      });
    }, error => {
      console.log(error);
    });
  }

  cambiarBoton() {
    if (this.myForm.invalid) {
      return;
    }
    const buttonElement = this.elementRef.nativeElement.querySelector('.boton');
    const inputs = document.getElementsByTagName('input');

    if (this.boton) {
      buttonElement.innerText = 'Guardar';
      buttonElement.classList.remove('btn-primary', 'btn-danger');
      buttonElement.classList.add('btn-success');
      this.boton = false;
      for (let i = 0; i < inputs.length; i++) {
        this.renderer.removeAttribute(inputs[i], 'readonly');
      }
    } else {

      buttonElement.innerText = 'Editar';
      buttonElement.classList.remove('btn-success');
      buttonElement.classList.add('btn-primary', 'btn-danger');
      buttonElement.readonly = true;
      this.boton = true;
      for (let i = 0; i < inputs.length; i++) {
        this.renderer.setAttribute(inputs[i], 'readonly', 'true');
      }
      this.onSubmit();
    }
  }

  onSubmit() {

    Util.onValueChanged(true, this.myForm, this.formErrors, this.validationMessages);

    const formData = new FormData();

    const nom = this.myForm.get('nom')?.value;
    const cognoms = this.myForm.get('cognoms')?.value;
    const nif = this.myForm.get('nif')?.value;
    const direccio = this.myForm.get('direccio')?.value;
    const movil = this.myForm.get('movil')?.value;
    const email = this.myForm.get('email')?.value;

    if (nom) formData.append('nom', nom);
    if (cognoms) formData.append('cognoms', cognoms);
    if (nif) formData.append('nif', nif);
    if (direccio) formData.append('direccio', direccio);
    if (movil) formData.append('movil', movil);
    if (email) formData.append('email', email);

    const ps = this.clientService.postClient(formData);
    ps.subscribe(
      (resp) => {
        this.router.navigate(['perfil-view']);
      },
      (error) => {
        // alert('Error: ' + error.message); // podríamos mostrar el error en html
      });



    // send message to subscribers via observable subject




  }




}
