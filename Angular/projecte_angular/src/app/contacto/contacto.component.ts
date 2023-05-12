import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent{

  loginForm= new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    poblacion: new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.minLength(9), Validators.maxLength(9),Validators.required]),
    codigopostal: new FormControl('',[Validators.minLength(5), Validators.maxLength(5),Validators.required]),
    mensaje: new FormControl('',[Validators.required]),
  })

  submitForm()
  {
    console.warn(this.loginForm.value);
  }


get nombre()
{
  return this.loginForm.get('nombre');
}

get apellidos()
{
  return this.loginForm.get('apellidos');
}

get telefono()
{
  return this.loginForm.get('telefono');
}

get codigopostal()
{
  return this.loginForm.get('codigopostal');
}

get poblacion()
{
  return this.loginForm.get('poblacion');
}

}
  
