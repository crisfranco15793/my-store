import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartSize: number;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {

    this.cartService.cart$.subscribe(products => {
      this.cartSize = products.length;
    });

  }

}
