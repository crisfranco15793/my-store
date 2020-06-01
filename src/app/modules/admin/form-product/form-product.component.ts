import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from 'src/app/models/product';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private productsService: ProductsService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      description: ['', [Validators.required]],
      image: [''],
    });
  }

  get priceField() {
    return this.formGroup.get('price');
  }

  createProduct(event: Event) {
    event.preventDefault(); // Evitar que el fomulario recargue la pagina.
    if (this.formGroup.valid) {
      const product: Product = this.formGroup.value;
      this.productsService.createProduct(product).subscribe(product => {
        this.router.navigate(['/admin/products']);
      });
    }
  }

}
