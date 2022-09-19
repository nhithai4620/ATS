import { Injectable, Injector } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AuthService } from 'app/shared/services/auth.service';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = request;
    let authService = this.injector.get(AuthService);
    const token = authService.getAccessToken();

    if (token != null) {
      request = this.addTokenHeader(request, token);
    }

    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err) {
          this.handleErrors(err);
        }
        return throwError(err);
      })
    );
  }

  private handleErrors(err: any) {
    if (err instanceof HttpErrorResponse) {
      switch (err.status) {
        case 401:
          console.log('User account or password incorrect');
          break;
        case 404:
          console.log('The server can not find the requested resource');
          break;
        case 403:
          console.log('The client does not have access rights to the content');
          break;
        case 500:
          console.log(
            'The server has encountered a situation it does not know how to handle.'
          );
          break;
        case 503:
          console.log('The server is not ready to handle the request.');
          break;
        default: {
          console.log(err.message);
          break;
        }
      }
    }
    return new Observable<HttpEvent<any>>();
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY,'Bearer ' + token),
    });
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
