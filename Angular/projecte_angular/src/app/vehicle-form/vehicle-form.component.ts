import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadesClientsService } from '../datos/dades-clients.service';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { IClient } from '../interfaces/IClient';
import { Util } from '../utilidades/util';
import { AuthenticationService } from '../login-token/_services/authentication.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  constructor(
    private vehicleService: DadesVehiclesService,
    private clientService: DadesClientsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService

  ) {
    this.myForm = new FormGroup({
    });
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({

      matricula: ['', [Validators.required, Validators.maxLength(25)]],
      marca: ['', [Validators.required, Validators.maxLength(25)]],
      model: ['', [Validators.required, Validators.maxLength(25)]],
      client_id: [null, Validators.required]
    });


    const user = this.authenticationService.userValue;
    this.id = user?.id;
    this.rol=user?.rol;

    this.clientService.getClientByUserId(this.id).subscribe(resp => {
       if (resp) this.client = resp;
     });
    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm,this.formErrors,this.validationMessages);
    });



  }
  id:any;
  rol:any;
  myForm: FormGroup;
  errorMessage: string = '';
  formErrors: any= {
    matricula: '',
    marca: '',
    model: '',
    client_id: ''
  };
  client: IClient = {
    id: 0,
    nom: '',
    cognoms: '',
    nif: '',
    user_id: '',
    tipu_id: 0
  };



  validationMessages: any = {
    matricula: {
      required: 'La matrícula es obligatoria.',
      maxlength: 'La matrícula no puede ser más larga que 25 caracteres.'
    },
    marca: {
      required: 'La marca es obligatoria.',
      maxlength: 'La marca no puede ser más larga que 25 caracteres.'
    },
    model: {
      required: 'El modelo es obligatorio.',
      maxlength: 'El modelo no puede ser más largo que 25 caracteres.'
    },
    client_id: {
      required: 'El cliente es obligatorio.'
    }
  };

  onSubmit(vehicle: any) {
    Util.onValueChanged(true, this.myForm,this.formErrors,this.validationMessages);

    if(this.rol==2){
    vehicle.client_id=this.client.id;
    }
    this.vehicleService.postVehicle(vehicle).subscribe({
      next: (data) => {
        this.router.navigate(['vehicle-list'])
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
   

  }
}