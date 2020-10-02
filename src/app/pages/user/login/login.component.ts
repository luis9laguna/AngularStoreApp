import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { UsersService } from 'src/app/shared/services/users.service';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public auth2: any;

  public loginForm = this.fb.group({
    email: [ 
      localStorage.getItem('email') || '', 
      [Validators.required, Validators.email] 
    ],
    password: ['', Validators.required ],
    remember: [false]
  });

  constructor(private fb: FormBuilder,
              private userService: UsersService,
              private router: Router) { }


  ngOnInit() {
    this.renderButton();
  }

  login(){
    this.userService.login(this.loginForm.value)
    .subscribe(data =>{
      if( this.loginForm.get('remember').value ){
        localStorage.setItem('email', this.loginForm.get('email').value);
      }else{
        localStorage.removeItem('email');
      }
      //REDIRECCION
    },(err) => {
      Swal.fire('Error', err.error.message, 'error');
    });
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 40,
      'theme': 'dark'
    });

    this.startApp();
  }

  async startApp() {

    await this.userService.googleInit();
    this.auth2 = this.userService.auth2;
    
    this.attachSignin(document.getElementById('my-signin2'));
  };

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
        (googleUser) => {
          const id_token = googleUser.getAuthResponse().id_token;
          this.userService.loginGoogle(id_token)
              .subscribe(resp => {
                this.router.navigateByUrl('/');
              });
        }, (error) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

}
