import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from 'src/services/contact.service';
import { IVehicle } from '../interfaces/IVehicle';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit{

  FormContacto: any = FormGroup;
  UrlEmail: string = environment.apiUrl;

  constructor(
    private vehicleService: DadesVehiclesService,
    private http: HttpClient,
    public fb: FormBuilder,
  ) { 
  //   this.FormContacto = this.fb.group({
  //   motivo: [''],
  //   mensaje: [''],
  //   fecha: [''],
  //   vehicle: ['']
  // });
}

  EnviarEmail(){
    // var formData: any = new FormData();
    // formData.append('motivo',this.FormContacto.get('motivo').value);
    // this.http
    //      .post(this.UrlEmail, formData)
    //      .subscribe(
    //        (response) => console.log(response),
    //        (error) => console.log(error)
    //      )
} 
  
  ngOnInit(): void {
    this.vehicleService.getDades().subscribe(resp => {
      if(resp.body) this.vehicles = resp.body;
    });
  }

   contactForm = new FormGroup({
     motivo: new FormControl('',[Validators.required]),
     mensaje: new FormControl('',[Validators.required]),
     fecha: new FormControl('',[Validators.required]),
     vehicle: new FormControl('',[Validators.required])
   })

  vehicles: IVehicle[]=[];


 get vehicle()
 {
   return this.contactForm.get('vehicle');
 }

 get motivo()
 {
   return this.contactForm.get('motivo');
 }

 get mensaje()
 {
   return this.contactForm.get('mensaje');
 }

 get fecha()
 {
   return this.contactForm.get('fecha');
 }

}
  
