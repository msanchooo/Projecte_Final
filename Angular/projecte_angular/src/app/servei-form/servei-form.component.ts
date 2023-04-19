import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DadesServeisService } from '../datos/dades-serveis.service';

@Component({
  selector: 'app-servei-form',
  templateUrl: './servei-form.component.html',
  styleUrls: ['./servei-form.component.css']
})
export class ServeiFormComponent implements OnInit {
  constructor(
    private ServeiService: DadesServeisService,
    private router: Router,
    private formBuilder: FormBuilder

  ) {
    this.myForm = new FormGroup({
    });
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({

      nom: 'Pastillas Traseras',
      preu: '70',
      durada:'1'
    });

    // this.clientService.getDades().subscribe(resp => {
    //   if (resp.body) this.clients = resp.body;
    // });
  }
  myForm: FormGroup;
  errorMessage: string = '';

  onSubmit(servei: any) {

    console.log(servei);

    this.ServeiService.postServei(servei).subscribe({
      next: (data) => {
        this.router.navigate(['servei-list'])
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });

  }
}