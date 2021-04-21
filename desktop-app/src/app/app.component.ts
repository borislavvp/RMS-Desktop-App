import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Restaurant Application"
  
  private _authService: AuthService;

  constructor(authService: AuthService) {
    this._authService = authService;
   }

  ngOnInit(): void {
  }

  get IsAuthenticated() {
    return this._authService.isAuthenticated();
  }
}
