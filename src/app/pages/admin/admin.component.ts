import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service'
import { CategoryService } from '../../shared/services/category.service'
import { Category } from '../../shared/models/category';
import { Product } from '../../shared/models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public categories: Category[];
  public products: Product[];
  public categoryId: string;

  constructor(private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.allCategory();
  }

  productsByCategory(id) {
    this.categoryService.getDetailCategory(id)
      .subscribe(data => this.products = data['products']);
    
    this.categoryId = id;
  }

  allCategory() {
    this.categoryService.getCategory()
      .subscribe(data => this.categories = data);
  }

  delete(data) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger     '
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        const id = data[0];
        const type = data[1];

        if (type === "product") {
          this.productService.deleteProduct(id).subscribe(data => {
            Swal.fire({
              icon: 'success',
              title: `Product Deleted Successfully`,
              showConfirmButton: false,
              timer: 2000
            });

            //GET PRODUCTS UPDATES
             this.productsByCategory(this.categoryId);

      }, (err) => {
            Swal.fire('Error', err.error.message, 'error');
          });

        } else if (type === "category") {
          this.categoryService.deleteCategory(id).subscribe(data => {
            Swal.fire({
              icon: 'success',
              title: `Category Deleted Successfully`,
              showConfirmButton: false,
              timer: 2000
            })

            //GET CATEGORIES UPDATES
            this.allCategory();

          }, (err) => {
            Swal.fire('Error', err.error.message, 'error');
          });

        } else {
          return false;
        }

      } else if ( result.dismiss === Swal.DismissReason.cancel ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your file is safe',
          'error'
        )
      }
    });
  }
}
