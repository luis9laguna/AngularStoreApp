//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

//ROUTESMODULE
import { ProductsRoutingModule } from './products.routing';

//COMPONENTS
import { NewEditComponent } from './new-edit/new-edit.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';


@NgModule({
  declarations: [
    NewEditComponent,
    AllProductsComponent,
    DetailProductComponent,
  ],
  exports: [
    NewEditComponent,
    AllProductsComponent,
    DetailProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule
  ]
})
export class ProductsModule { }
