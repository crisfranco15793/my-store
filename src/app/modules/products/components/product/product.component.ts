import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productAddedToCart: EventEmitter<string> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartService.addProductToCart(this.product);
  }

}
