import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable,from } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,public router:Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return from(this.auth.User)
          .pipe(
              switchMap(user => {
                  if (user) {
                      request = request.clone({
                          setHeaders: {
                              Authorization: `Bearer ${user.access_token}`
                          }
                      });
                  }
                  return next.handle(request);
              })
            );
  }
}