//MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent, 
      children: [
        {
          path: "products",
          loadChildren: () =>
            import("./pages/products/products.module").then(
              (m) => m.ProductsModule
            )
        },
        {
          path: "category",
          loadChildren: () =>
            import("./pages/categories/categories.module").then(
              (m) => m.CategoriesModule
            )
        },
        {
          path: "user",
          loadChildren: () =>
            import("./pages/user/user.module").then(
              (m) => m.UserModule
            )
        }
      ]
    },
    { path: 'admin', component: AdminComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
