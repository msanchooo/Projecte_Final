import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';
import { DadesClientsService } from 'src/app/datos/dades-clients.service';
import { DadesTreballadorsService } from 'src/app/datos/dades-treballadors.service';

@Component({
  selector: 'app-login-material',
  templateUrl: './login-material.component.html',
  styleUrls: ['./login-material.component.css'],
})
export class LoginMaterialComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router,
    private clientService: DadesClientsService,
    private treballadorService: DadesTreballadorsService
  ) {
    sessionStorage.clear();
  }

  userdata: any;

  loginform = this.builder.group({
    email: this.builder.control('tuku@tuku.com', Validators.required),
    password: this.builder.control('P@ssw0rd', Validators.required),
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.Getbycode(this.loginform.value.email).subscribe((res) => {
        this.userdata = res;
        console.log(this.userdata);
        console.log(this.userdata.body.password);
        console.log(this.userdata.password);
        if (this.userdata.body.password === this.loginform.value.password) {
          sessionStorage.setItem('id_user', this.userdata.body.id);
          sessionStorage.setItem('rol', this.userdata.body.rol);

          const rol = this.userdata.body.rol;

          console.log(this.clientService.getClientByUserId(3));
          if (rol == 1) {
            // sessionStorage.setItem('id', this.clientService.getClientByUserId('1').id);
          } else {
          }

          this.router.navigate(['']);
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    }
  }
}