import { OnInit } from '@angular/core';
import { Cart } from './models/cart.models';
import { CartService } from 'src/services/cart.service';
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  title: any;


  constructor(private cartService: CartService) {}

  ngOnInit() {
      this.cartService.cart.subscribe((_cart) => {
        this.cart = _cart;
      });
  }
}
