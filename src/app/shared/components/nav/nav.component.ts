import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private userService: UsersService,
              private router: Router) { }

  search( term ){
    /* this.route.navigate(['/search', term]); */
    console.log(term);
    
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/');
  }

}
