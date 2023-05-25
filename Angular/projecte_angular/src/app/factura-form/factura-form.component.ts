import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IClient } from '../interfaces/IClient';
import { DadesClientsService } from '../datos/dades-clients.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { DadesFacturasService } from '../datos/dades-facturas.service';
import { IVehicle } from '../interfaces/IVehicle';
import { IServei } from '../interfaces/IServei';
import { DadesServeisService } from '../datos/dades-serveis.service';

declare var require: any;

// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {

  constructor(
    private facturaService: DadesFacturasService,
    private vehicleService: DadesVehiclesService,
    private clientService: DadesClientsService,
    private serveiService: DadesServeisService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }



  ngOnInit(): void {

    // carreguem el desplegable de clients
    // ngOnInit s'executa quan s'inicialitza el component
    this.clientService.getDades().subscribe(resp => {
      // accedim al body de la resposta HTTP.
      if (resp.body) this.clients = resp.body;
    });

    this.serveiService.getDades().subscribe(resp => {
      // accedim al body de la resposta HTTP.
      if (resp.body) this.serveis = resp.body;
    });


  }
  errorMessage: string = '';

  serveis: IServei[] = [];
  servei: IServei = {
    id: 0,
    preu: 0,
    nom: '',
    durada: 0,
  };

  clients: IClient[] = [];
  client: IClient = {
    id: 0,
    nom: '',
    cognoms: '',
    nif: '',
    direccio: '',
    movil: 0,
    user: { id: 0, email: '', password: '', rol: 0 },
  };

  vehicles: IVehicle[] = [];
  vehicle: IVehicle = {
    id: 0,
    matricula: '',
    marca: '',
    model: '',
    km: 0,
    client: {
      id: 0,
      nom: '',
      cognoms: '',
      nif: '',
      user: { id: 0, email: '', password: '', rol: 0 },
      direccio: '',
      movil: 0
    }
  };
  selectedOptionClient: string = '';
  selectedOptionVehicle: string = '';
  selectedOptionServei: string = '';
  quantitat: number = 1;
  client_direccio: String = '';
  client_movil: number | undefined;
  vehicle_matricula: String = '';
  vehicle_km: number | undefined;
  servei_preu: number | undefined;
  servei_total: number = 0;
  serveiArr: any[] = [];
  serveisEliminats: IServei[] = [];
  data: any;
  total_factura: number = 0;
  total_factura_iva: number = 0;
  error_servei: string = "";
  error_cantidad: string = "";
  error_client: string = "";
  error_vehicle: string = "";
  error_fecha: string = "";
  form_correcto: boolean = true;



  actualizarClient(selectedOptionClient: string) {
    this.clientService.getClient(selectedOptionClient).subscribe(data => {
      this.client = data;
      this.client_direccio = data.direccio;
      this.client_movil = data.movil;
      console.log(this.clients);

    });

    this.vehicleService.getVehicleClient(selectedOptionClient).subscribe(resp => {

      if (resp.body) this.vehicles = resp.body;

      console.log(this.vehicles);
    });
  }

  actualizarVehicle(selectedOptionVehicle: string) {

    this.vehicleService.getVehicle(selectedOptionVehicle).subscribe(data => {

      this.vehicle = data;
      this.vehicle_matricula = data.matricula;
      this.vehicle_km = data.km;

      console.log(this.vehicles);
    });
  }

  actualizarServei(selectedOptionServei: string) {

    if (parseInt(selectedOptionServei) < 1) {
      this.servei.id = 0;
    } else {

      this.serveiService.getServei(selectedOptionServei).subscribe(data => {

        this.servei = data;
        this.servei_preu = data.preu;
        this.servei_total = data.preu * this.quantitat

        console.log(this.vehicles);
      });
    }
  }
  actualizarData(data: any) {
    this.data = data;
  }

  anadirLinea() {

    //Validaciones 

    this.form_correcto = true;

    if (this.servei.id < 1) {
      this.error_servei = "Selecciona un servei";
      this.form_correcto = false;
    } else {
      this.error_servei = "";
    }
    if (this.quantitat < 1) {
      this.error_cantidad = "La quantitat minima es 1"
      this.form_correcto = false;

    } else {
      this.error_cantidad = "";
    }

    //Añadir Linea

    if (this.form_correcto == true) {

      let serveiTemp = {
        id: this.servei.id,
        nom: this.servei.nom,
        quantitat: this.quantitat,
        preu: this.servei.preu,
        total: this.servei.preu * this.quantitat,
      };

      this.serveiArr.push(serveiTemp);

      //Borrar servicio

      this.serveis.forEach(servei => {
        if (servei.nom == this.servei.nom) {
          this.serveisEliminats.push(servei);
          this.serveis.splice(this.serveis.indexOf(servei), 1);
        }
      });


      //Calcular total

      this.calcularFactura();

      this.servei.id = 0;
      this.quantitat = 1;
      this.selectedOptionServei = "0";


    }

  }



  borrarLinea(nom: string) {

    this.serveiArr.forEach(servei => {
      if (servei.nom == nom) {
        this.serveiArr.splice(this.serveiArr.indexOf(servei), 1);
      }
    });

    //volver a añadir servicio

    this.serveisEliminats.forEach(servei => {

      if (servei.nom == nom) {
        this.serveis.push(servei);
        this.serveisEliminats.splice(this.serveisEliminats.indexOf(servei), 1);
      }
    });

    //calcular total
    this.calcularFactura();

  }

  calcularFactura() {
    this.total_factura = 0;
    this.serveiArr.forEach(servei => {
      this.total_factura += servei.quantitat * servei.preu;
    });

    this.total_factura_iva = Number((this.total_factura * 1.21).toFixed(2));
  }



  onSubmit() {


    let errores = true;
    const formData = new FormData();
    if (this.data) {
      formData.append('data', this.data);
      this.error_fecha = "";
    } else {
      this.error_fecha = "Introducir fecha";
      errores = false;
    }
    if (this.client.id) {
      formData.append('client_id', this.client.id.toString());
      this.error_client = "";
    } else {
      this.error_client = "Selecciona cliente";
      errores = false;

    }
    if (this.vehicle.id) {
      formData.append('vehicle_id', this.vehicle.id.toString());
      this.error_vehicle = "";
    } else {
      this.error_vehicle = "Seleciona Vehiculo";
      errores = false;

    }

    if (this.serveiArr.length < 1) {
      this.error_servei = "Añade minimo 1 servicio"
      errores = false;
    } else {
      this.error_servei = ""
    }

    if (this.total_factura) formData.append('total', this.total_factura.toString());
    if (this.total_factura_iva) formData.append('total_con_iva', this.total_factura_iva.toString());

    if (errores = true) {
      this.facturaService.postFactura(formData).subscribe({
        next: (data) => {
          console.log("Despues de postFactura:")
          console.log(data.body.id);
          console.log(this.serveiArr);
          const body = { id: data.body.id, serveis: this.serveiArr };
          this.facturaService.postLinea(body).subscribe({
            next: (data) => {
              this.router.navigate(['factura-list'])
            },
            error: (error) => {
              this.errorMessage = error.message;
            }
          });
        },
        error: (error) => {
          this.errorMessage = error.message;
        }
      });

    }
  }

}
