import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  loggedIn: boolean = false;

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.cookieService.get('token');
    if (token != null) {
      this.loggedIn = true;
    } else {
      this.router.navigate(['/login']);
      this.loggedIn = false;
    }
    return this.loggedIn;
  }
}
