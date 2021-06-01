import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL= 'https://backend-proyecto-app.herokuapp.com/api';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: { email: string; password: string; }){
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: { email: string; password: string; }){
    return this.http.post<any>(this.URL + '/signIn', user);
  }

  loggenIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
