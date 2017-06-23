import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthActionsService {

  private login_url = 'https://zdravkovk.eu.auth0.com/authorize'
  constructor(private http : Http) {}

  private providers = {
    facebook: 'facebook',
    google: 'google-oauth2'
  }
  public login() : any {

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