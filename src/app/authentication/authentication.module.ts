import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {MaterialComponentsModule} from '../material-components/material-components.module';
import {AuthActionsService} from './auth-actions.service';
import { HttpModule } from '@angular/http';
import { Angular2SocialLoginModule } from 'angular2-social-login';

let providers = {
    "google": {
      "clientId": "707072846999-49706cmmut7k19242hd36etug5jgr1jp.apps.googleusercontent.com"
    },
    "facebook": {
      "clientId": "836926473129127",
      "apiVersion": "2.4"
    }
  };

@NgModule({
  imports: [
    CommonModule, MaterialComponentsModule, HttpModule, Angular2SocialLoginModule
  ],
  exports: [LoginPageComponent],
  declarations: [LoginPageComponent],
  providers: [AuthActionsService]
})
export class AuthenticationModule {}
Angular2SocialLoginModule.loadProvidersScripts(providers);