import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = environment.productsUrl;  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl);
  }

  getProductById(productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.productsUrl}/${productId}`);
  }

}
