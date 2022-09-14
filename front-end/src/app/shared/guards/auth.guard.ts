import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  loggedIn: boolean = false;
  constructor(private as: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('accessToken') != null) {
      this.loggedIn = true;
    } else {
      this.router.navigate(['/login']);
      this.loggedIn = false;
    }

    this.as.isLoggedIn$.subscribe((data) => {
      this.loggedIn = data;
    });

    return this.loggedIn;
  }
}
