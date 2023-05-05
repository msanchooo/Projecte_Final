import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IClient } from '../interfaces/IClient';
import { DadesClientsService } from '../datos/dades-clients.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DadesVehiclesService } from '../datos/dades-vehicles.service';
import { DadesFacturasService } from '../datos/dades-facturas.service';
import { IVehicle } from '../interfaces/IVehicle';
import { IServei } from '../interfaces/IServei';
import { DadesServeisService } from '../datos/dades-serveis.service';

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
  ) {
    this.myForm = new FormGroup({
    });
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nom: ''
    });

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

    this.serveiService.getServei(selectedOptionServei).subscribe(data => {

      this.servei = data;
      this.servei_preu = data.preu;
      this.servei_total = data.preu * this.quantitat

      console.log(this.vehicles);
    });
  }

  anadirLinea() {
   
    let serveiTemp = {
      nom: this.servei.nom,
      quantitat:this.quantitat,
      preu: this.servei.preu,
      total: this.servei.preu * this.quantitat
    };

    this.serveiArr.push(serveiTemp);

    this.serveiArr.forEach(servei => {
      this.total_factura = servei.quantitat * servei.preu;
    });

    this.total_factura_iva=Number((this.total_factura*1.21).toFixed(2));



  }




  myForm: FormGroup;
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
    user_id: '',
    tipu_id: 0,
    direccio: '',
    movil: 0
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
      user_id: '',
      tipu_id: 0,
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
  servei_total: number =0;
  serveiArr: any[] = [];
  total_factura:number=0;
  total_factura_iva:number=0;


  // onSubmit(factura: any) {

  //   console.log(compte);

  //   this.facturaService.postFactura(factura).subscribe({
  //     next: (data) => {
  //       this.router.navigate(['compte-list'])
  //     },
  //     error: (error) => {
  //       this.errorMessage = error.message;
  //     }
  //   });

  // }

}
