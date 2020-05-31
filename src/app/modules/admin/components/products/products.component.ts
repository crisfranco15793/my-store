import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';

import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getAllProducts().subscribe(products => this.products = products);
  }

  deleteProductById(productId: string): void {
    this.productsService.deleteProductById(productId).subscribe(itWasDeleted => {
      if (itWasDeleted) {
        this.getProducts();
        // Otra opción es eliminar de products el producto eliminado splice.
      }
    });
  }

}
