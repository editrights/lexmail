import {Component, OnInit} from '@angular/core';
import {AuthActionsService} from '../auth-actions.service';
import {AuthService} from "angular2-social-login";

@Component({selector: 'app-login-page', templateUrl: './login-page.component.html', styleUrls: ['./login-page.component.scss']})
export class LoginPageComponent implements OnInit {

  constructor(private authService : AuthActionsService, public _auth : AuthService) {}

  ngOnInit() {}
  sub : any;

  login() {
    this
      .authService
      .login()
  }

  otherLogin() {
    this.sub = this
      ._auth
      .login('facebook')
      .subscribe((data) => {
        console.log(data);
        // user data name, image, uid, provider, uid, email, token (returns tokenId for
        // google, accessToken for Facebook, no token for linkedIn)
      })
  }
}
