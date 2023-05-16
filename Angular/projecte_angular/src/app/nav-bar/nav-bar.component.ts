import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Util } from '../utilidades/util';
import { AuthenticationService } from '../login-token/_services/authentication.service';
import { ServeiUpdateService } from '../servei-update/servei-update.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadesClientsService } from '../datos/dades-clients.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  http: any;
  constructor(
    private loginPrd: AuthenticationService,
    private service: ServeiUpdateService,
    private clientService: DadesClientsService,
    private authenticationService: AuthenticationService

  ) {
    this.subscriptionName = this.service.getUpdate().subscribe((message) => {
      //message contains the data sent from service
      this.rol = message;
      this.rolUsuari = this.rol._rol;

      console.log(message);
    });

    this.subscriptionName2 = this.service.getUpdate2().subscribe((message) => {
      //message contains the data sent from service
      this.usuari = message;
      this.username = this.usuari._user;
    });
  }

  private subscriptionName: Subscription;
  private subscriptionName2: Subscription;

  rol: any;
  rolUsuari: any;

  username: any;
  usuari: any;

  ngOnInit(): void {

    // this.rolUsuari = localStorage.getItem('rol');
    // this.username =  localStorage.getItem('username');

    const user = this.authenticationService.userValue;

    this.rolUsuari = user?.rol;

    this.username = user?.username;
  }

  public _logout() {
    return this.loginPrd.logout();
  }

  public _isLoggedIn() {
    return this.loginPrd.isLoggedIn();
  }

  ngOnDestroy() {
    // It's a good practice to unsubscribe to ensure no memory leaks
    this.subscriptionName.unsubscribe();
    this.subscriptionName2.unsubscribe();
  }
}
