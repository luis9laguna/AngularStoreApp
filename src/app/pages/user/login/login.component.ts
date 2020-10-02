import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    name: ['luis', Validators.required ],
    email: ['luis9laguna@gmail.com', Validators.required ],
    password: ['123456', Validators.required ],
    password2: ['123456', Validators.required ],
    terms: ['false', Validators.required ],
  });

  constructor(private fb: FormBuilder) { }

  createUser(){
    console.log(this.loginForm.value);
    
  }
}
