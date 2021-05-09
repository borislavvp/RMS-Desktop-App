import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    withCredentials: true
  };

  fetching: boolean = false;
  authChanged = new Subject<boolean>();
  
  private _userManager: UserManager;
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient, router: Router) {
    
    this._userManager = new UserManager({
      authority: environment.IDENTITY_AUTHORITY,
      client_id: "DESKTOP_APP_ID",
      redirect_uri:  window.location.protocol + "//" + window.location.host + "/signin-oidc",
      response_type: "code",
      scope: "openid profile",
      post_logout_redirect_uri: window.location.protocol + "//" + window.location.host + "/signout-callback-oidc",
      automaticSilentRenew: true,
      silent_redirect_uri: window.location.protocol + "//" + window.location.host + "/assets/silent-callback.html"
    })
    this._httpClient = httpClient;
    this._userManager.events.addAccessTokenExpired(() => router.navigate(["login"]));
  }
  get User() {
    return new Promise<User>((resolve, reject) => {
      this._userManager.getUser()
        .then(user => {
          resolve(user);
        }).catch(error => {
            reject();
        })
    });
  }
  get isAuthenticated() {
    return new Promise<boolean>(resolve => {
      this._userManager.getUser()
        .then((user) => {
          const IsLoggedIn = user ? !user.expired : false;
          resolve(IsLoggedIn);
          this.authChanged.next(IsLoggedIn);
        })
        .catch(() => {
          resolve(false);
          this.authChanged.next(false);
        })
     })
  }

  SignIn(email: string, password: string): Promise<void> {
    this.fetching = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._httpClient.post<void>(`${this._userManager.settings.authority}/api/login`, { email, password },this.httpOptions)
        .toPromise()
        .then(() => this._userManager.signinRedirect()
            .then(() => resolve())
            .catch(() => reject())
            .finally(() => this.fetching = false)
        )
        .catch(() => reject())
        .finally(() => this.fetching = false)
      }, 500);
    }) 
  }

  HandleLoginCallback() {
    return new Promise<void>((resolve, reject) => {
      this._userManager
        .signinRedirectCallback()
        .then(() => {
          this._userManager.getUser()
            .then(() => resolve())
            .catch(() => reject());
        })
        .catch(() => reject());
    })
  }

  Logout() {
    return new Promise<void>((resolve, reject) => {
      this._userManager
        .signoutRedirect()
        .then(() => resolve())
        .catch(() => reject());
    })
  }

  HandleLogoutCallback() {
    return new Promise<void>((resolve, reject) => {
      this._userManager
        .signoutRedirectCallback()
        .then(() => resolve())
        .catch(() => reject());
    })
  }
}
