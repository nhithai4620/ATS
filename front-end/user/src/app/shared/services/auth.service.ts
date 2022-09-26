import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this._isLoggedIn$.next(!!this.getAccessToken);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  login(userName: string, password: string) {
    let data = {
      username: userName,
      password: password,
    };
    return this.http
      .post<any>(`${environment.apiUrl}/auth/login`, data, {
        headers: this.Headers,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          this._isLoggedIn$.next(true);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  logout() {
    localStorage.removeItem('accessToken');
    this._isLoggedIn$.next(false);
    this.router.navigate(['/login']);
  }

  register(user: any) {
    const data = JSON.stringify(user);
    return this.http
      .post<any>(`${environment.apiUrl}/auth/register`, data, {
        headers: this.Headers,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
