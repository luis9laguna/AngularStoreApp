import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//COMPONENTS
import { CreateCategoryComponent } from './create-edit/create-category.component';
import { EditCategoryComponent } from './create-edit/edit-category.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';

const routes: Routes = [
    { 
        path: 'category', 
        children: [
            { path: 'create', component: CreateCategoryComponent },
            { path: 'edit/:id', component: EditCategoryComponent },
            { path: 'all', component: AllCategoriesComponent},
            { path: ':id', component: DetailCategoryComponent},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CategoriesRoutingModule {}