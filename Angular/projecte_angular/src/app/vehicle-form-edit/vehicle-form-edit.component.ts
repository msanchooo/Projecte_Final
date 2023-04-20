import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesServeisService } from '../datos/dades-serveis.service';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { IVehicle } from '../interfaces/IVehicle';

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
    client: { id: 0, nom: '', cognoms: '', nif: '', user_id: '', tipu_id: 0 }

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
      this.onValueChanged();
    });

  }

  

  getVehicle(id: string | null) {
    this.vehicleService.getVehicle(id).subscribe(data => {
      this.vehicle = data;
      this.myForm.setValue({
        matricula: data.matricula,
        marca: data.marca,
        model: data.model
      });
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  createForm(): void {
    this.myForm = this.formBuilder.group({
      matricula: ['BK300', [Validators.required, Validators.maxLength(25)]],
      marca: ['bmw', [Validators.required, Validators.maxLength(25)]],
      model: ['serie 3', [Validators.required, Validators.maxLength(25)]],
    });
  }

  errorMessage: string = '';
  formErrors: any= {
    matricula: '',
    marca: '',
    model: ''
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
    }
  };

  

  onSubmit(): void {
    
    this.onValueChanged();

    const formData = new FormData();
    const matricula = this.myForm.get('matricula')?.value;
    const marca = this.myForm.get('marca')?.value;
    const model = this.myForm.get('model')?.value;
    const client_id = this.vehicle.client.id;
    
    if (matricula) formData.append('matricula', matricula);
    if (marca) formData.append('marca', marca);
    if (model) formData.append('model', model);
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
