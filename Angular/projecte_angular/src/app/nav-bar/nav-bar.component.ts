import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Util } from '../utilidades/util';
import { AuthenticationService } from '../login-token/_services/authentication.service';
import { ServeiUpdateService } from '../servei-update/servei-update.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  constructor(
    private loginPrd: AuthenticationService,
    private service: ServeiUpdateService
  ) {
    this.subscriptionName = this.service.getUpdate().subscribe((message) => {
      //message contains the data sent from service
      this.rol = message;
    });
  }

  // rol: string | null = '';
  rol: any;
  private subscriptionName: Subscription;

  ngOnInit(): void {
    // this.rol = Util.getRol();
    // console.log(this.rol);
  }

  public _logout() {
    console.log(this.rol);
    return this.loginPrd.logout();
  }

  public _isLoggedIn() {
    return this.loginPrd.isLoggedIn();
  }

  ngOnDestroy() {
    // It's a good practice to unsubscribe to ensure no memory leaks
    this.subscriptionName.unsubscribe();
  }
}
