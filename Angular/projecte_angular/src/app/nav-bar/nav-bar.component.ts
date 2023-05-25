import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Cart, CartItem } from '../models/cart.models';
import { CarritoComponent } from '../carrito/carrito.component';
import { CartService } from 'src/services/cart.service';

import { Util } from '../utilidades/util';
import { AuthenticationService } from '../auth/_services/authentication.service';
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
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  private subscriptionName: Subscription;
  private subscriptionName2: Subscription;

  constructor(
    private loginPrd: AuthenticationService,
    private service: ServeiUpdateService,
    private clientService: DadesClientsService,
    private authenticationService: AuthenticationService,
    private cartService: CartService

  ) {
    this.subscriptionName = this.service.getUpdate().subscribe((message) => {
      //message contains the data sent from service
      this.rol = message;
      this.rolUsuari = this.rol._rol;
    });

    this.subscriptionName2 = this.service.getUpdate2().subscribe((message) => {
      //message contains the data sent from service
      this.usuari = message;
      this.username = this.usuari._user;
    });
  }


  rol: any;
  rolUsuari: any;

  username: any;
  usuari: any;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current , 0);
  }

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

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }
  

  onClearCart() {
    this.cartService.clearCart();
  }

  ngOnDestroy() {
    // It's a good practice to unsubscribe to ensure no memory leaks
    this.subscriptionName.unsubscribe();
    this.subscriptionName2.unsubscribe();
  }
}
