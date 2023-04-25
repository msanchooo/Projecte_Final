import { Pipe, PipeTransform } from '@angular/core';
import { ITreballador } from '../interfaces/ITreballador';

@Pipe({
  name: 'treballadorListFilter'
})
export class TreballadorListFilterPipe implements PipeTransform {
  transform(treballadors: ITreballador[], filterBy: string): ITreballador[] {
    filterBy = filterBy ? filterBy.toLowerCase() : '';
    return filterBy ? treballadors.filter((treballador) => {
      return treballador.nom.toLowerCase().indexOf(filterBy) !== -1 || treballador.cognoms.toLowerCase().indexOf(filterBy) !== -1 
      || treballador.nif.toLowerCase().indexOf(filterBy) !== -1 || treballador.sou.toString().toLowerCase().indexOf(filterBy) !== -1
      || treballador.carrec.toString().toLowerCase().indexOf(filterBy) !== -1;
    }) : treballadors;
  }
}

