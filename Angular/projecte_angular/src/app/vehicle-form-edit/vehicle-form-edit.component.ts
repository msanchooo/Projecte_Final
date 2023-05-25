import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesServeisService } from '../datos/dades-serveis.service';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { IVehicle } from '../interfaces/IVehicle';
import { Util } from '../utilidades/util';

@Component({
  selector: 'app-vehicle-form-edit',
  templateUrl: './vehicle-form-edit.component.html',
  styleUrls: ['./vehicle-form-edit.component.css']
})
export class VehicleFormEditComponent {

  post: any = '';
  id: string | null = '';
  confirmacio: string = '';
  headers: any;
  myForm: FormGroup = this.formBuilder.group({});
  vehicle: IVehicle = {
    id: 0,
    matricula: '',
    marca: '',
    model: '',
    km: 0,
    client: {
      id: 0, nom: '', cognoms: '', nif: '', user: { id: 0, email: '', password: '', rol: 0 }
      , direccio: '', movil: 0
    }

  };
  constructor(
    private ruta: ActivatedRoute,
    private vehicleService: DadesVehiclesService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.getVehicle(this.id);
    this.myForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.myForm, this.formErrors, this.validationMessages);
    });

  }



  getVehicle(id: string | null) {
    this.vehicleService.getVehicle(id).subscribe(data => {
      this.vehicle = data;
      this.myForm.setValue({
        matricula: data.matricula,
        marca: data.marca,
        model: data.model,
        km: data.km

      });
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  createForm(): void {
    this.myForm = this.formBuilder.group({

      matricula: ['', [Validators.required, Validators.maxLength(25)]],
      marca: ['', [Validators.required, Validators.maxLength(25)]],
      model: ['', [Validators.required, Validators.maxLength(25)]],
      km: ['', [Validators.required]],


    });
  }

  errorMessage: string = '';
  formErrors: any = {
    matricula: '',
    marca: '',
    model: '',
    km: ''
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
    km: {
      required: 'Los km son obligatorios.',
    }
  };



  onSubmit(): void {

    Util.onValueChanged(true, this.myForm, this.formErrors, this.validationMessages);
    if (this.myForm.invalid) {
      return;
    }
    const formData = new FormData();
    const matricula = this.myForm.get('matricula')?.value;
    const marca = this.myForm.get('marca')?.value;
    const model = this.myForm.get('model')?.value;
    const km = this.myForm.get('km')?.value;
    const client_id = this.vehicle.client.id;

    if (matricula) formData.append('matricula', matricula);
    if (marca) formData.append('marca', marca);
    if (model) formData.append('model', model);
    if (km) formData.append('km', km);
    if (client_id) formData.append('client_id', client_id.toString());

    const ps = this.vehicleService.putVehicle(this.id, formData);
    ps.subscribe(
      (resp) => {
        this.post = resp;
        if (resp.status == '200') {
          this.confirmacio = 'Vehicle actualizado correctamente';
          this.router.navigate(['vehicle-list']);
        } else {
          this.confirmacio = 'ERROR ' + resp.status;
        }
      },
      (error) => {
        alert('Error: ' + error.message); // podríamos mostrar el error en html
      });
  }

}
