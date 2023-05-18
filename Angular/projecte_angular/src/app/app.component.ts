import { OnInit } from '@angular/core';
import { Cart } from './models/cart.models';
import { CartService } from 'src/services/cart.service';
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './auth/_services/authentication.service';
import { User } from './auth/_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  user?: User | null;
  title = 'projecte_angular';
  ismenurequired = false;
  cart: Cart = { items: [] };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cartService: CartService
  ) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authenticationService.logout();
  }
  
  ngDoCheck(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
