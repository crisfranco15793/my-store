import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  showProductId(productId: string) {
    console.log(productId);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
