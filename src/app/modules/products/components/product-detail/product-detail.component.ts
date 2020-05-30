import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../../core/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productsService.getProductById(productId).subscribe(product => this.product = product);
  }

  updateProduc(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    const product: Partial<Product> = {
      id: productId,
      price: 2500,
      description: 'hola'
    };
    this.productsService.updateProduct(product).subscribe();
  }

  deleteProductById(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productsService.deleteProductById(productId).subscribe();
  }

}
