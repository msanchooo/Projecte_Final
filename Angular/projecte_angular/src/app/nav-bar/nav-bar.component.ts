import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Cart, CartItem } from '../models/cart.models';
import { CarritoComponent } from '../carrito/carrito.component';
import { CartService } from 'src/services/cart.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

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

  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }
  

  onClearCart() {
    this.cartService.clearCart();
  }

  }



