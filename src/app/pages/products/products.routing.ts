import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//COMPONENTS
import { NewEditComponent } from './new-edit/new-edit.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
    { 
        path: 'product', 
        children: [
            { path: 'create-edit/:id', component: NewEditComponent },
            { path: 'all', component: AllProductsComponent},
            { path: ':id', component: DetailProductComponent},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ProductsRoutingModule {}