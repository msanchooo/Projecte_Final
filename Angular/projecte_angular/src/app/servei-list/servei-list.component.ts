import { Component } from '@angular/core';
import { DadesServeisService } from '../datos/dades-serveis.service';
import { IServei } from '../interfaces/IServei';
import { AuthenticationService } from '../auth/_services/authentication.service';

@Component({
  selector: 'app-servei-list',
  templateUrl: './servei-list.component.html',
  styleUrls: ['./servei-list.component.css']
})
export class ServeiListComponent {
  router: any;
  rol:any;

  constructor(private serveiService: DadesServeisService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    //fem servir event de creacio
    console.log("Listat de serveis inicialitzat");
    this.serveiService.getDades().subscribe(resp=>{
      if(resp.body) this.serveis = resp.body;
    })

    const user = this.authenticationService.userValue;
    this.rol=user?.rol;
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
    this.router.navigate(['servei-list']);
  }



  titolLlistat = 'Listado de servicios';
  serveis:IServei[] = [];
  listFilter: string = '';

}