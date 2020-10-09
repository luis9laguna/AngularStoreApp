import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from '../../../shared/models/category';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit{

  public categories: Category[];
  public url = 'http://localhost:3000/api/upload/category/';

  constructor( private categoryService: CategoryService ) { }



  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategory()
    .subscribe(data => {
      this.categories = data;
    });
  }


}
