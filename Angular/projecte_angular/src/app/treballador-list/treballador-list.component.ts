import { Component } from '@angular/core';
import { DadesTreballadorsService } from '../datos/dades-treballadors.service';
import { ITreballador } from '../interfaces/ITreballador';

@Component({
  selector: 'app-treballador-list',
  templateUrl: './treballador-list.component.html',
  styleUrls: ['./treballador-list.component.css']
})
export class TreballadorListComponent {

  router: any;
  constructor(private treballadorService: DadesTreballadorsService) { }
  ngOnInit() {
    console.log("Listat de treballadors inicialitzat");
    this.treballadorService.getDades().subscribe(resp => {
      if(resp.body) this.treballadors = resp.body;
      console.log(this.treballadors);
    });



  }

  confirmarEliminacion(): boolean {
    return confirm("¿Está seguro de que desea eliminar este vehiculo?");
  }

  eliminarTreballador(id: any) {
    if (this.confirmarEliminacion()) {
      this.treballadorService.deleteTreballador(id)
        .subscribe(
          response => {
            console.log(response);
            this.ngOnInit();
          },
          error => {
            console.log(error);
          });
    }
    this.router.navigate(['treballador-list']);
  }
  

  titolLlistat = 'Llistat de treballadors';
  treballadors:ITreballador[] = [];
  listFilter: string = '';

}
