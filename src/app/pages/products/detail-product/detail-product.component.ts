import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  public id: string;
  public product: Product;
  public category: string;

  constructor( private productService: ProductService,
              private router: ActivatedRoute ) {

    this.router.params.subscribe(params => this.id = params["id"]);
  }

  ngOnInit() {
    this.getProduct(this.id);
  }

  getProduct(id){
    this.productService.getDetailProduct(id)
    .subscribe(data => {
      this.product = data['product'];
      this.category = data['product'].category.name;
    });
  }

}
