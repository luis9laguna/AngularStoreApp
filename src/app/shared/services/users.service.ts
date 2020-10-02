import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators'; 
import { Router } from '@angular/router';

const base_url = environment.base_url;
declare const gapi:any;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public auth2: any;
  public url: string = 'localhost:3000';
  
  constructor(public http: HttpClient,
              private router: Router) { 

    this.googleInit();
  }

  getQuery( query: string, data ){

    const url = `localhost:3000/api${ query }`;
    let json = JSON.stringify(data);
    let params = `json=${ json }`;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post( url, params ,{ headers } );
  }
  
  register(data){
    
    /* let query = 'user';
    return this.getQuery( query, data ); */

    return this.http.post(`${base_url}/user`, data);
    
  }

  login(data){
    return this.http.post(`${base_url}/login`, data)
                .pipe(
                  tap((res: any) => {
                    localStorage.setItem('token', res.token);
                  }));
  }

  loginGoogle(token){
    return this.http.post(`${base_url}/login/google`, {token})
                .pipe(
                  tap((res: any) => {
                    localStorage.setItem('token', res.token);
                  }));
  }

  logout(){
    this.auth2.signOut().then( () => {
      localStorage.removeItem('token');
    });
  }

  googleInit(){

    return new Promise(resolve => {
      
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '227696679700-18vrts42gq705442fdbbisn9icthggts.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });

        resolve();
      });
    });

  }


}
