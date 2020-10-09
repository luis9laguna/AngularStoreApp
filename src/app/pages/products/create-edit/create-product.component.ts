import { Component, OnInit } from '@angular/core';
import { Category } from '../../../shared/models/category';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateProductComponent implements OnInit {

  public isEdit: boolean = false;
  public categories: Category[];

  public productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    price: [, Validators.required],
    stock: [, Validators.required],
  });

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.allCategories();
  }

  allCategories() {
    this.categoryService.getCategory()
      .subscribe(data => this.categories = data);
  }

  saveProduct() {
    this.productService.createProduct(this.productForm.value)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: `The product *${data['product'].name}* 
                  has been saved successfully`,
          showConfirmButton: false,
          timer: 2000
        })
      }, (err) => {
        Swal.fire('Error', err.error.message, 'error');
      });
  }

}
