import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.models';

const STORE_BASE_URL = "https://fakestoreapi.com";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }


  getAllProducts(limit = '12', sort = 'desc', category?: string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    )
    
    
  }


  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    )
  }

  // addProducts() {
  //   fetch('https://fakestoreapi.com/products/7',{
  //           method:"PUT",
  //           body:JSON.stringify(
  //               {
  //                   title: 'test product',
  //                   price: 13.5,
  //                   description: 'lorem ipsum set',
  //                   image: 'https://i.pravatar.cc',
  //                   category: 'electronic'
  //               }
  //           )
  //       })
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  // }


    
}
