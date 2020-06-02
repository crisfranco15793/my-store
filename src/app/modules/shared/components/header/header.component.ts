import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartSize$: Observable<number>;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartSize$ = this.cartService.cart$.pipe(map(products => products.length));
  }

}
