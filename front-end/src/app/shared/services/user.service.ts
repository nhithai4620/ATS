import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http
      .get<any>(`${environment.apiUrl}/users/me/profile`)
      .pipe()
      .subscribe({
        next: (res: any) => {
          console.log(res.data);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
