import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormUpdateProductComponent } from './components/form-update-product/form-update-product.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/update/:id',
        component: FormUpdateProductComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
