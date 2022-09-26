import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthRes } from '../interfaces/authenticate-response';

@Injectable({ providedIn: 'root' })
export class AuthenticateService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getCredential() {
    const token = this.cookieService.get('token');
    const refresh = this.cookieService.get('refreshToken');
    const permission = this.cookieService.get('permission');
    return { token, refreshToken: refresh, permission };
  }
  refresh(refreshToken: string) {
    return this.http
      .post<AuthRes>(environment.serverURL + '/refresh-token/', {
        refresh: refreshToken,
      })
      .pipe(
        tap((authRes) => {
          this.handleAuthentication(
            authRes.access,
            authRes.refresh,
            authRes.permission
          );
        })
      );
  }
  signIn(email: string, password: string) {
    return this.http
      .post<AuthRes>(environment.serverURL + '/login/', {
        email,
        password,
      })
      .pipe(
        tap((authRes) => {
          this.handleAuthentication(
            authRes.access,
            authRes.refresh,
            authRes.permission
          );
        })
      );
  }

  private handleAuthentication(
    token: string,
    refreshToken: string,
    permission: string
  ) {
    this.cookieService.set('token', token);
    this.cookieService.set('refreshToken', refreshToken);
    this.cookieService.set('permission', permission);
    // console.log(this.cookieService.getAll());
    // console.log(token, refreshToken, permission);
  }
}
