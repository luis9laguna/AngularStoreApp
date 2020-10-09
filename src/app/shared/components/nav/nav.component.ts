import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public categories: Category[];
  public logged = this.userService.isLogged();

  constructor(private userService: UserService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.getCategories();    
  }

  search( term ){
    this.router.navigate(['/product/search', term]);    
  }

  getCategories(){
    this.categoryService.getCategory()
    .subscribe(data => this.categories = data);
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/');
    this.logged = false;
  }

}
