import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Product } from '../models/product.models';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/services/store.service';

const ROWS_HEIGHT: { [id:number]: number} = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubcription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubcription = this.storeService.getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }


  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string):void {
    this.category = newCategory;
    this.getProducts();
  }

  onAddToCart(prodcut: Product): void {
    this.cartService.addToCart({
      product: prodcut.image,
      name: prodcut.title,
      price: prodcut.price,
      quantity: 1,
      id: prodcut.id
    })

  }

  onItemsCountChange(newCount: number): void {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
      if (this.productsSubcription) {
        this.productsSubcription.unsubscribe();
      }
  }





}
