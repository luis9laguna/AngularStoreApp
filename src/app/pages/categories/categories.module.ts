//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

//ROUTESMODULE
import { CategoriesRoutingModule } from './categories.routing';

//COMPONENTS
import { NewEditComponent } from './new-edit/new-edit.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';

@NgModule({
  declarations: [
    NewEditComponent,
    AllCategoriesComponent,
    DetailCategoryComponent

  ],
  exports: [
    NewEditComponent,
    AllCategoriesComponent,
    DetailCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    RouterModule
  ]
})
export class CategoriesModule { }
