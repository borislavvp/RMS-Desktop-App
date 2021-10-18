import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  private _authService: AuthService;
  private _toastrService: ToastrService;
  IsFetching: boolean = false;
  constructor(authService: AuthService,toastrService: ToastrService) {
    this._authService = authService;
    this._toastrService = toastrService;
  }

  ngOnInit(): void {
  }
  SignOut() {
    this.IsFetching = true;
    this._authService.Logout()
      .catch(() => this._toastrService.error("Something went wrong!"))
      .finally(() => this.IsFetching = false);
  }
}
