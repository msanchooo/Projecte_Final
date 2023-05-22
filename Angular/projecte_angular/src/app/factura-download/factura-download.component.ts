import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesFacturasService } from '../datos/dades-facturas.service';

declare var require: any;

// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-factura-download',
  templateUrl: './factura-download.component.html',
  styleUrls: ['./factura-download.component.css']
})
export class FacturaDownloadComponent {
  id: string | null = '';
  constructor(
    private ruta: ActivatedRoute,
    private facturaService: DadesFacturasService,


  ) { }
  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.getFactura(this.id);
  }
  //factura
  factura_numero: any;
  factura_fecha: any;
  //Client 
  client_nom: any;
  client_direccio: any;
  client_movil: any;
  //Vehicle
  vehicle_marca_model: any;
  vehicle_matricula: any;
  vehicle_km: any;
  //Serveis
  serveiArr: any[] = [];
  total_factura: any;
  total_factura_iva: any;





  getFactura(id: string | null) {
    this.facturaService.getFactura(id).subscribe(data => {
      //factura
      this.factura_fecha = data.data;
      this.factura_numero = data.numero;
      //client
      this.client_nom = data.client.nom;
      this.client_direccio = data.client.direccio;
      this.client_movil = data.client.movil;
      //vehicle
      this.vehicle_marca_model = data.vehicle.marca + " " + data.vehicle.model;
      this.vehicle_matricula = data.vehicle.matricula;
      this.vehicle_km = data.vehicle.km;

      this.serveiArr = this.serveiArr.concat(data.serveis);
      console.log(this.serveiArr);
      this.total_factura = 0;
      this.serveiArr.forEach(servei => {
        this.total_factura += servei.pivot.unitats * servei.preu;
      });
  
      this.total_factura_iva = Number((this.total_factura * 1.21).toFixed(2));

      console.log(this.serveiArr);


    }, error => {
      console.log(error);
    });
  }

  // public exportPDF() {
  //   const pdfInner = document.getElementById("pdfTable");
  //   if (pdfInner) {

  //     var html = htmlToPdfmake(pdfInner.innerHTML);
  //     const documentDefinition = {content: html };
  //     pdfMake.createPdf(documentDefinition).download();
  //     console.log(html);
  //   }
  // }
}
