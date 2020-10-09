//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ROUTESMODULE
import { ProductsRoutingModule } from './products.routing';
import { ComponentsModule } from 'src/app/shared/components/components.module';

//COMPONENTS
import { CreateProductComponent } from './create-edit/create-product.component';
import { EditProductComponent } from './create-edit/edit-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SearchComponent } from './search/search.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    AllProductsComponent,
    DetailProductComponent,
    CreateProductComponent,
    EditProductComponent,
    SearchComponent
  ],
  exports: [
    AllProductsComponent,
    DetailProductComponent,
    CreateProductComponent,
    EditProductComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
