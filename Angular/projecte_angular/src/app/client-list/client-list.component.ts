import { Component } from '@angular/core';
import { DadesClientsService } from '../datos/dades-clients.service';
import { IClient } from '../interfaces/IClient';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  router: any;

  constructor(private clientService: DadesClientsService) { }

  ngOnInit(): void {
    //fem servir event de creacio
    console.log("Listat de clients inicialitzat");
    this.clientService.getDades().subscribe(resp => {
      // accedim al body de la resposta HTTP.
      if(resp.body) this.clients = resp.body;
    });
  }

  confirmarEliminacion(): boolean {
    return confirm("¿Está seguro de que desea eliminar este cliente?");
  }

  eliminarClient(id: any) {
    if (this.confirmarEliminacion()) {
      this.clientService.deleteClient(id)
        .subscribe(
          response => {
            console.log(response);
            this.ngOnInit();
          },
          error => {
            console.log(error);
          });
    }
    this.router.navigate(['client-list']);
  }

  titolLlistat = 'Llistat de clients';
  clients:IClient[] = [];
  listFilter: string = '';

}
