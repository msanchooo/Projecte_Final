import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesServeisService } from '../datos/dades-serveis.service';
import { IServei } from '../interfaces/IServei';

@Component({
  selector: 'app-servei-form-edit',
  templateUrl: './servei-form-edit.component.html',
  styleUrls: ['./servei-form-edit.component.css']
})
export class ServeiFormEditComponent implements OnInit {
  post: any = '';
  id: string | null = '';
  confirmacio: string = '';
  headers: any;
  myForm: FormGroup = this.formBuilder.group({});
  servei: IServei = {
    id: 0,
    nom: '',
    preu: 0,
    durada: 0
  };

  constructor(
    private ruta: ActivatedRoute,
    private serveiService: DadesServeisService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.getServei(this.id);
  }

  getServei(id: string | null) {
    this.serveiService.getServei(id).subscribe(data => {
      this.servei = data;
      this.myForm.setValue({
        nom: data.nom,
        preu: data.preu,
        durada: data.durada
      });
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      nom: [null],
      preu: [null],
      durada: [null]
    });
  }

  onSubmit(): void {
    const formData = new FormData();
    const nom = this.myForm.get('nom')?.value;
    const preu = this.myForm.get('preu')?.value;
    const durada = this.myForm.get('durada')?.value;
    if (nom) formData.append('nom', nom);
    if (preu) formData.append('preu', preu);
    if (durada) formData.append('durada', durada);

    const ps = this.serveiService.putServei(this.id, formData);
    ps.subscribe(
      (resp) => { 
        this.post = resp;
        if (resp.status == '200') {
          this.confirmacio = 'Servicio actualizado correctamente';
          this.router.navigate(['list']);
        } else {
          this.confirmacio = 'ERROR ' + resp.status; 
        }
      },
      (error) => {  
        alert('Error: ' + error.message); // podríamos mostrar el error en html
      });      
  }


}




