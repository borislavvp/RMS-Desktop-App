import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { from } from 'rxjs';
import { take,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.isAuthenticated.then(logged => {
        if (!logged) {
          return reject(this.router.navigate(['login']));
        }
        return resolve(true);
      })
    })
  }
}