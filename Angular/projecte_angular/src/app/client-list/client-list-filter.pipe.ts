import { Pipe, PipeTransform } from '@angular/core';
import { IClient } from '../interfaces/IClient';

@Pipe({
  name: 'clientListFilter'
})
export class ClientListFilterPipe implements PipeTransform {
  transform(clients: IClient[], filterBy: string): IClient[] {
    filterBy = filterBy ? filterBy.toLowerCase() : '';
    return filterBy ? clients.filter((client) => {
      return client.nom.toLowerCase().indexOf(filterBy) !== -1 || client.cognoms.toLowerCase().indexOf(filterBy) !== -1 || client.nif.toLowerCase().indexOf(filterBy) !== -1;
    }) : clients;
  }
}
