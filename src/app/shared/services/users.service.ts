import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string = 'localhost:3000';
  constructor(public http: HttpClient) { }

  getQuery( query: string, data ){

    const url = `localhost:3000/api${ query }`;
    let json = JSON.stringify(data);
    let params = `json=${ json }`;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post( url, params ,{ headers } );
  }
  
  register(data){

    let query = 'user';
    return this.getQuery( query, data );
    
  }


}
