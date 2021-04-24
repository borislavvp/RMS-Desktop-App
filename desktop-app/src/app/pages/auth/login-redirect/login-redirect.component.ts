import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login-redirect',
  templateUrl: './login-redirect.component.html',
})
export class LoginRedirectComponent implements OnInit {
  private _authService: AuthService;
  private _router: Router;

  constructor(authService: AuthService,router:Router) {
    this._authService = authService;
    this._router = router;
   }

  ngOnInit(): void {
    this._authService.HandleLoginCallback()
      .finally(() => this._router.navigate(["/orders"]));
  }

}
