import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from './services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Restaurant Application"
  private isUserAuthenticated = false;
  private _authService: AuthService;

  constructor(authService: AuthService) {
    this._authService = authService;
    this._authService.authChanged
      .subscribe((logged) => this.isUserAuthenticated = logged)
   }

  ngOnInit(): void {
  }

  get shouldShowSiderBar() {
    return this.isUserAuthenticated;
  }
}
