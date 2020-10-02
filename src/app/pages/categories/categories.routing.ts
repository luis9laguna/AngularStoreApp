import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//COMPONENTS
import { NewEditComponent } from './new-edit/new-edit.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';

const routes: Routes = [
    { 
        path: 'category', 
        children: [
            { path: 'create-edit/:id', component: NewEditComponent },
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