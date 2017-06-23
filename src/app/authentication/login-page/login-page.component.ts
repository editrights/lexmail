import {Component, OnInit} from '@angular/core';
import {AuthActionsService} from '../auth-actions.service';

import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({selector: 'app-login-page', templateUrl: './login-page.component.html', styleUrls: ['./login-page.component.scss']})
export class LoginPageComponent implements OnInit {

  constructor(private authService : AuthActionsService, private iconRegistry : MdIconRegistry, sanitizer : DomSanitizer) {
    iconRegistry.addSvgIcon('facebook-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/custom-icons/facebook-logo.svg'));
    iconRegistry.addSvgIcon('google-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/custom-icons/google-logo.svg'));
  }

  ngOnInit() {}
  sub : any;

  login() {
    this
      .authService
      .login()
  }

  otherLogin() {
  
  }
}
