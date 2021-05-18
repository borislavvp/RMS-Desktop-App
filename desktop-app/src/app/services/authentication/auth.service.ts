import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SocketService } from '../socket/socket.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    withCredentials: true
  };

  fetching: boolean = false;
  authChanged = new BehaviorSubject<boolean>(false);
  
  private _userManager: UserManager;
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient, router: Router,socketService:SocketService) {
    
    this._userManager = new UserManager({
      authority: environment.IDENTITY_AUTHORITY,
      client_id: "DESKTOP_APP_ID",
      redirect_uri:  window.location.protocol + "//" + window.location.host + "/signin-oidc",
      response_type: "code",
      scope: "openid profile proeprestaurantgateway.fullaccess",
      post_logout_redirect_uri: window.location.protocol + "//" + window.location.host + "/signout-callback-oidc",
      automaticSilentRenew: true,
      silent_redirect_uri: window.location.protocol + "//" + window.location.host + "/assets/silent-callback.html"
    })
    this._httpClient = httpClient;
    this._userManager.events.addAccessTokenExpired(() => {
      router.navigate(["login"]);
      socketService.disconnect();
    });
  }
  get User() {
    return new Promise<User>((resolve, reject) => {
      this._userManager.getUser()
        .then(user => {
          resolve(user);
        }).catch(() => {
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
          if(this.authChanged.value !== IsLoggedIn)
            this.authChanged.next(IsLoggedIn);
        })
        .catch(() => {
          if (this.authChanged.value !== false)
          this.authChanged.next(false);
          resolve(false);
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
