import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  public products: Product[];

  constructor( private productService: ProductService ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProduct()
    .subscribe(data => this.products = data );
  }

}
