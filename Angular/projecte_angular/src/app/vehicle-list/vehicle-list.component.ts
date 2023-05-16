import { Component, OnInit } from '@angular/core';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { IVehicle } from '../interfaces/IVehicle';
import { AuthenticationService } from '../login-token/_services/authentication.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  router: any;
  constructor(private vehicleService: DadesVehiclesService,private service: AuthenticationService) { }
  ngOnInit() {
    this.vehicleService.getDades().subscribe(resp => {
      if(resp.body) this.vehicles = resp.body;
    });
  }



  confirmarEliminacion(): boolean {
    return confirm("¿Está seguro de que desea eliminar este vehiculo?");
  }

  eliminarVehicle(id: any) {
    if (this.confirmarEliminacion()) {
      this.vehicleService.deleteVehicle(id)
        .subscribe(
          response => {
            console.log(response);
            this.ngOnInit();
          },
          error => {
            console.log(error);
          });
    }
    this.router.navigate(['vehicle-list']);
  }

  titolLlistat = 'Llistat de vehicles';
  vehicles:IVehicle[] = [];
  listFilter: string = '';


}



