import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  private _authService: AuthService;
  private _router: Router;
  private _toastr: ToastrService;

  constructor(authService: AuthService,router:Router, toastr:ToastrService) {
    this._authService = authService;
    this._router = router;
    this._toastr = toastr;
   }

  ngOnInit(): void {
  }

  SignIn() {
    this._authService.SignIn(this.username, this.password)
      .then(() => this._router.navigate(['orders']).catch(() => this._toastr.error("Something went wrong!")))
      .catch(() => {
        this._toastr.error("Invalid credentials! Please, try again!");
      })
  }

  get CanSignIn() {
    return this.username !== "" && this.password !== "";
  }

  get IsFetching() {
    return this._authService.fetching;
  }

}
