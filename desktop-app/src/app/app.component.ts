import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/authentication/auth.service';
import { SocketService } from './services/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Restaurant Application"
  private isUserAuthenticated = false;
  private _authService: AuthService;

  constructor(authService: AuthService,socketService:SocketService) {
    this._authService = authService;
    this._authService.authChanged
      .subscribe((logged) => {
        this.isUserAuthenticated = logged;
        if (logged) {
          console.log(environment.ORDER_MESSAGE_SERVICE("ASD"))
          authService.User
            .then(user => {
              socketService
                .connect(environment.ORDER_MESSAGE_SERVICE(user.access_token))
                .subscribe(obs => console.log(obs.data))
            }
        )
        } else {
          socketService.disconnect();
        }
      })
   }

  ngOnInit(): void {
  }

  get shouldShowSiderBar() {
    return this.isUserAuthenticated;
  }
}
