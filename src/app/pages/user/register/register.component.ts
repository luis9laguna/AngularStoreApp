import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    name: ['', Validators.required ],
    email: ['', [Validators.required, Validators.email] ],
    password: ['', Validators.required ],
    password2: ['', Validators.required],
    terms: [ false,  Validators.requiredTrue ],
  },{
    validators: this.samepasswords('password', 'password2')
  });

  constructor(private fb: FormBuilder) { }

  createUser(){
    this.formSubmitted = true;
    console.log(this.registerForm.value);
    console.log(this.registerForm);
  }

  fieldInvalid( field: string ): boolean{
    if(this.registerForm.get(field).invalid && this.formSubmitted){
      return true;
    }else{
      return false;
    }
  }

  validPassword(){
    const pass = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if( (pass != pass2) && this.formSubmitted ){
      return true;
    }else{
      return false;
    }
  }

  terms(){
   return !this.registerForm.get('terms').value && this.formSubmitted;
  }

  samepasswords( pass: string, pass2: string ){

    return ( formGroup: FormGroup ) =>{

      const passControl = formGroup.get(pass);
      const pass2Control = formGroup.get(pass2);

      if(passControl.value === pass2Control.value){
        pass2Control.setErrors(null)
      }else{
        pass2Control.setErrors( {noSame: true} )
      }

    }

  }

}
