import { Component } from '@angular/core';
import { DadesServeisService } from '../datos/dades-serveis.service';
import { IServei } from '../interfaces/IServei';

@Component({
  selector: 'app-servei-list',
  templateUrl: './servei-list.component.html',
  styleUrls: ['./servei-list.component.css']
})
export class ServeiListComponent {

  constructor(private serveiService: DadesServeisService) { }

  ngOnInit(): void {
    //fem servir event de creacio
    console.log("Listat de serveis inicialitzat");
    this.serveiService.getDades().subscribe(resp => {
      // accedim al body de la resposta HTTP.
      if(resp.body) this.serveis = resp.body;
    });
  }

  confirmarEliminacion(): boolean {
    return confirm("¿Está seguro de que desea eliminar este servicio?");
  }

  eliminarServei(id: any) {
    if (this.confirmarEliminacion()) {
      this.serveiService.deleteServei(id)
        .subscribe(
          response => {
            console.log(response);
            this.ngOnInit();
          },
          error => {
            console.log(error);
          });
    }
  }



  titolLlistat = 'Llistat de serveis';
  serveis:IServei[] = [];
  listFilter: string = '';

}