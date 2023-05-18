import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from 'src/services/contact.service';
import { IVehicle } from '../interfaces/IVehicle';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit{


  constructor(
    private vehicleService: DadesVehiclesService
  ) { }
  
  ngOnInit(): void {
    this.vehicleService.getDades().subscribe(resp => {
      if(resp.body) this.vehicles = resp.body;
    });
  }

  contactForm= new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    poblacion: new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.minLength(9), Validators.maxLength(9),Validators.required]),
    codigopostal: new FormControl('',[Validators.minLength(5), Validators.maxLength(5),Validators.required]),
    motivo: new FormControl('',[Validators.required]),
    mensaje: new FormControl('',[Validators.required]),
  })

  vehicles: IVehicle[]=[];

  submitForm()
  {
    console.warn(this.contactForm.value);
  }


get nombre()
{
  return this.contactForm.get('nombre');
}

get apellidos()
{
  return this.contactForm.get('apellidos');
}

get telefono()
{
  return this.contactForm.get('telefono');
}

get codigopostal()
{
  return this.contactForm.get('codigopostal');
}

get poblacion()
{
  return this.contactForm.get('poblacion');
}

get motivo()
{
  return this.contactForm.get('motivo');
}

get mensaje()
{
  return this.contactForm.get('mensaje');
}

}
  
