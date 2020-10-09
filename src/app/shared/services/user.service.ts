import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';

const base_url = environment.base_url;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public auth2: any;
  public url: string = 'localhost:3000';
  public user: User;

  constructor(public http: HttpClient) {
    this.googleInit();   
  }

  isLogged(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get role(): 'ADMIN_ROLE' | 'USER_ROLE' {
    return this.user.role;
  }

  get uid(): string {
    return this.user.uid || '';
  }

  getQuery(query: string, data) {

    const url = `localhost:3000/api${query}`;
    let json = JSON.stringify(data);
    let params = `json=${json}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, params, { headers });
  }

  register(data) {
    return this.http.post(`${base_url}/user`, data);
  }

  login(data) {
    return this.http.post(`${base_url}/login`, data)
      .pipe(
        tap((res: any) => {
          const { role, google, email, name, uid } = res.user;
          this.user = new User(name, email, uid, role, google, '');
          localStorage.setItem('token', res.token);
        }));
  }

  loginGoogle(token) {
    return this.http.post(`${base_url}/login/google`, { token })
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token);
        }));
  }

  logout() {
    this.auth2.signOut().then(() => {
      localStorage.removeItem('token');
    });
  }

  googleInit() {

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

  ValidateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'Authorization': token
      }
    }).pipe(
      map((res: any) => {
        const { email, google, name, role, uid } = res.user;
        this.user = new User(name, email, google, role, uid);
        localStorage.setItem('token', res.token);
        return true;
      }),
      catchError((err => of(err)))
    );
  }


}
