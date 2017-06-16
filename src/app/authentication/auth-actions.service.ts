import {Injectable} from '@angular/core';
import auth0 from 'auth0-js';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthActionsService {

  private webAuth = new auth0.WebAuth({clientID: 'mF5MQjxUy6YF1CtkSA2WUC7sSOUNO3vu', domain: 'zdravkovk.eu.auth0.com'});
  private login_url = 'https://zdravkovk.eu.auth0.com/authorize'
  constructor(private http : Http) {}

  private providers = {
    facebook: 'facebook',
    google: 'google-oauth2'
  }
  public login() : any {
    // this   .webAuth   .popup   .authorize({     connection:
    // this.providers.google,     responseType: 'token'   }, function (a, b) {
    // console.log(a, b);   });

    this
      .http
      .get(this.login_url)
      .map(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
        return Observable.throw(err);
      })
      .subscribe(data => {
        debugger;
      }, greshka => {
        debugger;
      });
  }
}