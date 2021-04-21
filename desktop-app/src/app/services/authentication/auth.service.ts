import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fetching: boolean = false;
  private _userManager: UserManager;
  private _httpClient: HttpClient;
  constructor(httpClient:HttpClient) {
    this._userManager = new UserManager({

    })
    this._httpClient = httpClient;
  }

  isAuthenticated() {
    return false;
  }

  SignIn(username: string, password: string): Promise<void> {
    this.fetching = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._httpClient.post<void>("https://localhost:5001/api/login", { username, password })
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
}
