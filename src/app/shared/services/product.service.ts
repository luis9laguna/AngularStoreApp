import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResProduct, ResProducts, ResSearch } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators'; 
import { Router } from '@angular/router';
import { User } from '../models/user';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    public http: HttpClient
  ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers: {
        'Authorization': this.token
      }
    }
  }

  createProduct(data){
    return this.http.post(`${base_url}/product`, data, this.headers);
  }

  updateProduct(data){
    return this.http.put(`${base_url}/product`, data, this.headers);
  }

  getProduct(){
    return this.http.get(`${base_url}/product`)
    .pipe(
      map((data: ResProducts) => data.products));
  }

  getDetailProduct(id){
    return this.http.get(`${base_url}/product/${id}`)
    .pipe(
      map((data: ResProduct) => data.product));
  }

  deleteProduct(id){
    return this.http.delete(`${base_url}/product/${id}`, this.headers);
  }

  searchProduct(term){
    return this.http.get(`${base_url}/search/product/${term}`)
    .pipe(
      map((data: ResSearch) => data.results));
  }

}


