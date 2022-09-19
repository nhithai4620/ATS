import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  
  _profile$ = new BehaviorSubject<any[]>([]);
  profile$ = this._profile$.asObservable();


  getProfile() {
    return this.http
      .get<any>(`${environment.apiUrl}/users/me/profile`)
      .pipe()
      .subscribe({
        next: (res: any) => {
          // this._profile$.next(res);
          console.log(res)
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
