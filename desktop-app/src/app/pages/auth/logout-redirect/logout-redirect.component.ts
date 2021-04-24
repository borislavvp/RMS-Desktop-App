import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-logout-redirect',
  templateUrl: './logout-redirect.component.html',
})
export class LogoutRedirectComponent implements OnInit {
  private _authService: AuthService;
  private _router: Router;
  private _toastrService: ToastrService;

  constructor(authService: AuthService,router:Router,toastrService: ToastrService) {
    this._authService = authService;
    this._router = router;
    this._toastrService = toastrService;
   }

  ngOnInit(): void {
    this._authService.HandleLogoutCallback()
      .finally(() => this._router.navigate(["/login"]))
  }

}
