import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { AdminRoutingModule } from './admin-routing.module';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LayoutModule
  ]
})
export class AdminModule { }
