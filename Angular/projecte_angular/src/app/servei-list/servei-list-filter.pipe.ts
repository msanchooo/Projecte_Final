import { Pipe, PipeTransform } from '@angular/core';
import { IServei } from '../interfaces/IServei';

@Pipe({
  name: 'serveiListFilter'
})
export class ServeiListFilterPipe implements PipeTransform {

    transform(serveis: IServei[], filterBy: string): IServei[] {
      filterBy = filterBy ? filterBy.toLowerCase() : '';
      return filterBy ? serveis.filter((servei) => {
        return servei.nom.toLowerCase().indexOf(filterBy) !== -1;
      }) : serveis;
    }

}
