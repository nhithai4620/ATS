import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse) => {
        const errorMessage = this.handleError(errorResponse);
        return throwError(() => errorMessage);
      })
    );
  }
  private handleError(errRes: HttpErrorResponse) {
    console.log(errRes);
    let errorMessage = 'An unknown error occurred';
    if (!errRes.error && !errRes.error.error) return errorMessage;
    switch (errRes.status) {
      case 500:
        errorMessage = '500 Internal Server Error';
        break;
      case 503:
        errorMessage = '503 Internal Server';
        break;
      case 404:
        errorMessage = '404 Not Found';
        break;
      case 403:
        errorMessage = '404 Not Found';
        break;
      case 401:
        this.refeshToken();
        errorMessage = this.messageUnauthorized();
        break;
      default:
        errorMessage = errRes.message;
        break;
    }

    return errorMessage;
  }
  private refeshToken() {
    const credential = this.authenticateService.getCredential();
    console.log('credential ', credential);

    if (credential)
      this.authenticateService.refresh(credential.refreshToken).subscribe();
  }
  private messageUnauthorized() {
    console.log(this.router.config);

    const currentUrl = this.router.config[0].path;
    if (currentUrl && currentUrl == 'login')
      return 'Email or password incorrect';
    return '401 Unauthorized';
  }
}
