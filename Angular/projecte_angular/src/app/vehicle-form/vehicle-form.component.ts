import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DadesClientsService } from '../datos/dades-clients.service';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { IClient } from '../interfaces/IClient';

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

      matricula: 'BK300',
      marca: 'bmw',
      model:'serie 3',
      client_id: [null]
    });

    this.clientService.getDades().subscribe(resp => {
      if (resp.body) this.clients = resp.body;
    });
  }
  myForm: FormGroup;
  errorMessage: string = '';
  clients: IClient[] = [];

  onSubmit(vehicle: any) {

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