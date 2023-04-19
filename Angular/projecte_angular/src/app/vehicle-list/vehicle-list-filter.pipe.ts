import { Pipe, PipeTransform } from '@angular/core';
import { IVehicle } from '../interfaces/IVehicle';

@Pipe({
  name: 'vehicleListFilter'
})
export class VehicleListFilterPipe implements PipeTransform {
  transform(vehicles: IVehicle[], filterBy: string): IVehicle[] {
    filterBy = filterBy ? filterBy.toLowerCase() : '';
    return filterBy ? vehicles.filter((vehicle) => {
      return vehicle.marca.toLowerCase().indexOf(filterBy) !== -1 || vehicle.model.toLowerCase().indexOf(filterBy) !== -1 
      || vehicle.matricula.toLowerCase().indexOf(filterBy) !== -1 || vehicle.client.nom.toLowerCase().indexOf(filterBy) !== -1
      || vehicle.client.cognoms.toLowerCase().indexOf(filterBy) !== -1;
    }) : vehicles;
  }

}
