//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

//COMPONENTS
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

//MODULECOMPONENTS
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
  ],
  exports: [
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CategoriesModule,
    ProductsModule,
    UserModule,
    RouterModule,
  ]
})
export class PagesModule { }
