import { Component } from '@angular/core';
import { IFactura } from '../interfaces/IFactura';
import { DadesFacturasService } from '../datos/dades-facturas.service';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent {
  router: any;

  constructor(private facturaService: DadesFacturasService) { }

  ngOnInit(): void {
    //fem servir event de creacio
    console.log("Listat de facturas inicialitzat");
    this.facturaService.getDades().subscribe(resp => {
      // accedim al body de la resposta HTTP.
      if(resp.body) this.facturas = resp.body;
    });
  }

  confirmarEliminacion(): boolean {
    return confirm("¿Está seguro de que desea eliminar este servicio?");
  }

  // eliminarFactura(id: any) {
  //   if (this.confirmarEliminacion()) {
  //     this.facturaService.deleteFactura(id)
  //       .subscribe(
  //         response => {
  //           console.log(response);
  //           this.ngOnInit();
  //         },
  //         error => {
  //           console.log(error);
  //         });
  //   }
  //   this.router.navigate(['factura-list']);
  // }

  titolLlistat = 'Llistat de facturas';
  facturas:IFactura[] = [];
  listFilter: string = '';

}
