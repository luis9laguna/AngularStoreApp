import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public products: Product[];
  public term: any;

  constructor( private productService: ProductService,
              private route: ActivatedRoute ) {
   this.route.params.subscribe(params => this.term = params['term']);
  }

  ngOnInit() {
    this.getProducts(this.term);
  }

  getProducts(term){
    this.productService.searchProduct(term)
    .subscribe(data => this.products = data );
  }

}
