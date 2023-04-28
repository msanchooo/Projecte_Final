import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesTreballadorsService } from '../datos/dades-treballadors.service';
import { ITreballador } from '../interfaces/ITreballador';
import { Util } from '../utilidades/util';

@Component({
  selector: 'app-treballador-form-edit',
  templateUrl: './treballador-form-edit.component.html',
  styleUrls: ['./treballador-form-edit.component.css']
})
export class TreballadorFormEditComponent {
  post: any = '';
  id: string | null = '';
  confirmacio: string = '';
  headers: any;
  myForm: FormGroup = this.formBuilder.group({});
  treballador: ITreballador = {
    id: 0,
    nom: '',
    cognoms: '',
    nif: '',
    sou: 0,
    carrec: '',
    user: { id: 0, email: '', password: '' },
    mostrarContrasenya: false
  };
  constructor(
    private ruta: ActivatedRoute,
    private treballadorService: DadesTreballadorsService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    
    this.createForm();
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.getTreballador(this.id);
    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm,this.formErrors,this.validationMessages);
    });

  }

  getTreballador(id: string | null) {
    this.treballadorService.getTreballador(id).subscribe(data => {
      this.treballador = data;
      this.myForm.setValue({
        nom: data.nom,
        cognoms: data.cognoms,
        nif: data.nif,
        sou: data.sou,
        carrec: data.carrec,
        email: data.user.email,
        password: data.user.password
      });
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({

      nom: ['', [Validators.required, Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]+$/)]],
      cognoms: ['Cuesta', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-zA-Z ]+$/)]],
      nif: ['1565176A', [Validators.required]],
      sou: [1300, [Validators.required,Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      carrec: ['Ayudante', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['juancuesta@yahoo.es', [Validators.required, Validators.email]],
      password: ['juancuesta', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]


    });
  }

  formErrors: any = {
    nom: '',
    cognoms: '',
    nif: '',
    sou: 0,
    carrec: '',
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

  onSubmit(): void {
    
    Util.onValueChanged(true, this.myForm,this.formErrors,this.validationMessages);


    const formData = new FormData();
    const nom = this.myForm.get('nom')?.value;
    const cognoms = this.myForm.get('cognoms')?.value;
    const nif = this.myForm.get('nif')?.value;
    const sou = this.myForm.get('sou')?.value;
    const carrec = this.myForm.get('carrec')?.value;
    const user_id = this.treballador.user.id;
    const email = this.myForm.get('email')?.value;
    const password = this.myForm.get('password')?.value;
    
    if (nom) formData.append('nom', nom);
    if (cognoms) formData.append('cognoms', cognoms);
    if (nif) formData.append('nif', nif);
    if (sou) formData.append('sou', sou);
    if (carrec) formData.append('carrec', carrec);
    if (user_id) formData.append('user_id', user_id.toString());
    if (email) formData.append('email', email);
    if (password) formData.append('password', password);

    const ps = this.treballadorService.putTreballador(this.id, formData);
    ps.subscribe(
      (resp) => { 
        this.post = resp;
        if (resp.status == '200') {
          this.confirmacio = 'Treballador actualizado correctamente';
          this.router.navigate(['treballador-list']);
        } else {
          this.confirmacio = 'ERROR ' + resp.status; 
        }
      },
      (error) => {  
        alert('Error: ' + error.message); // podríamos mostrar el error en html
      });      
  }

}
