import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//COMPONENTS
import { CreateProductComponent } from './create-edit/create-product.component';
import { EditProductComponent } from './create-edit/edit-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { 
        path: 'product', 
        children: [
            { path: 'create', component: CreateProductComponent },
            { path: 'edit/:id', component: EditProductComponent },
            { path: 'all', component: AllProductsComponent},
            { path: ':id', component: DetailProductComponent},
            { path: 'search/:term', component: SearchComponent},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ProductsRoutingModule {}