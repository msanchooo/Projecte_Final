import { Component, OnInit } from '@angular/core';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { IVehicle } from '../interfaces/IVehicle';
import { AuthService } from '../login_material/util/authService';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  router: any;
  constructor(private vehicleService: DadesVehiclesService,private authService: AuthService) { }
  ngOnInit() {

    const rol=  GetUserrole();

    if(rol==1){

    this.vehicleService.getDades().subscribe(resp => {
      if(resp.body) this.vehicles = resp.body;
    });
    }else{

    this.vehicleService.getDades().subscribe(resp => {
      if(resp.body) this.vehicles = resp.body;
    });
  }
    const userData = this.authService.getUserData();
    console.log(userData);
    console.log(userData);

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

