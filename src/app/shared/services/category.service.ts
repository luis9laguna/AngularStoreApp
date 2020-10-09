import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResCategory } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators'; 
import { Router } from '@angular/router';
import { User } from '../models/user';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

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

  createCategory(data){
    return this.http.post(`${base_url}/category`, data, this.headers);
  }

  updateCategory(data){
    return this.http.put(`${base_url}/category`, data, this.headers);
  }

  getCategory(){
    return this.http.get(`${base_url}/category`)
    .pipe(
      map((data: ResCategory) => data.categories));
  }

  getDetailCategory(id){
    return this.http.get(`${base_url}/category/${id}`);
  }

  deleteCategory(id){
    return this.http.delete(`${base_url}/category/${id}`, this.headers);
  }

}


