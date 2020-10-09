import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent implements OnInit {

  public products: Product[];
  public category: string;
  public id: any;

  constructor( private categoryService: CategoryService,
              private router: ActivatedRoute ) {

                this.router.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(){
    this.getProductsByCategory(this.id);
  }

  getProductsByCategory(id){
    this.categoryService.getDetailCategory(id)
    .subscribe(data => {
      this.products = data['products'];
      this.category = data['category'].name;      
    });
     
  }

}
