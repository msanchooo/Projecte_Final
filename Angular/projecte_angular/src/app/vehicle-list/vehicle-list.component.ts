import { Component, OnInit } from '@angular/core';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { IVehicle } from '../interfaces/IVehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  constructor(private vehicleService: DadesVehiclesService) { }
  ngOnInit() {
    console.log("Listat de vehicles inicialitzat");
    this.vehicleService.getDades().subscribe(resp => {
      if(resp.body) this.vehicles = resp.body;
    });

  }

  titolLlistat = 'Llistat de vehicles';
  vehicles:IVehicle[] = [];
  listFilter: string = '';


}

