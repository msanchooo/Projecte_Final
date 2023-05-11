import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadesClientsService } from '../datos/dades-clients.service';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { IClient } from '../interfaces/IClient';
import { Util } from '../utilidades/util';

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
    private formBuilder: FormBuilder

  ) {
    this.myForm = new FormGroup({
    });
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({

      matricula: ['BK300', [Validators.required, Validators.maxLength(25)]],
      marca: ['bmw', [Validators.required, Validators.maxLength(25)]],
      model: ['serie 3', [Validators.required, Validators.maxLength(25)]],
      km: [170000, [Validators.required]],
      client_id: [null, Validators.required]
    });

    this.clientService.getDades().subscribe(resp => {
      if (resp.body) this.clients = resp.body;
    });

    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm,this.formErrors,this.validationMessages);
    });



  }

  myForm: FormGroup;
  errorMessage: string = '';
  formErrors: any= {
    matricula: '',
    marca: '',
    model: '',
    km: 0,
    client_id: ''
  };
  clients: IClient[] = [];



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
    },
    km: {
      required: 'Els km es obligatorio.'
    }
  };

  onSubmit(vehicle: any) {
    Util.onValueChanged(true, this.myForm,this.formErrors,this.validationMessages);


    console.log(vehicle);

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