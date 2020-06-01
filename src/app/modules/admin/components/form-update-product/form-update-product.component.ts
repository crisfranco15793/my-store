import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from 'src/app/models/product';
import { MyValidators } from '../../../../utils/validators';

@Component({
  selector: 'app-form-update-product',
  templateUrl: './form-update-product.component.html',
  styleUrls: ['./form-update-product.component.scss']
})
export class FormUpdateProductComponent implements OnInit {

  formGroup: FormGroup;
  productId: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.buildForm();
  }

  ngOnInit(): void {
    this.productsService.getProductById(this.productId).subscribe(product => {
      this.formGroup.patchValue(product);
    });

  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      description: ['', [Validators.required]],
      image: [''],
    });
  }

  get priceField() {
    return this.formGroup.get('price');
  }

  updateProduct(event: Event) {
    event.preventDefault(); // Evitar que el fomulario recargue la pagina.
    if (this.formGroup.valid) {
      const product: Partial<Product> = this.formGroup.value;
      console.log(product);
      this.productsService.updateProduct(this.productId, product).subscribe(product => {
        this.router.navigate(['/admin/products']);
      });
    }
  }

}
