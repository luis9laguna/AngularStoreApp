//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

//ROUTESMODULE
import { CategoriesRoutingModule } from './categories.routing';

//COMPONENTS
import { CreateCategoryComponent } from './create-edit/create-category.component';
import { EditCategoryComponent } from './create-edit/edit-category.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';

//MODULESCOMPONENTS
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllCategoriesComponent,
    DetailCategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent
  ],
  exports: [
    AllCategoriesComponent,
    DetailCategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    RouterModule,
    PipesModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
