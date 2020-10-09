import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Product } from 'src/app/shared/models/product';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class EditProductComponent implements OnInit{

  public isEdit: boolean = true;
  public product: Product[];
  public categories: Category[];
  public id: string;
  public name: string;

  public productForm = this.fb.group({
    name: [ '', Validators.required ],
    description: ['', Validators.required ],
    category: ['', Validators.required ],
    price: [ , Validators.required],
    stock: [ ,  Validators.required ],
  });

  
  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private route: ActivatedRoute ) {
      
    this.route.params.subscribe(params => this.id = params["id"]);
    
  }

  ngOnInit() {
    this.allCategories();
    this.getProduct(this.id);  
  }

  allCategories(){
    this.categoryService.getCategory()
    .subscribe(data => this.categories = data);
  }

  getProduct(id){
    this.productService.getDetailProduct(id)
    .subscribe(data =>this.product = data);
  }
  

  saveProduct() {      
    this.productService.updateProduct( this.productForm.value )
    .subscribe(data => 
      Swal.fire({
        icon: 'success', 
        title: `The product ${data['product'].name} has been saved successfully`,
        showConfirmButton: false,
        timer: 2000 })   
    );
  }
}
