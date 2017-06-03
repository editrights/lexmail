import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import * as endpoints from './endpoints';

@Injectable()
export class MailRegistryService {

  constructor(private http : Http) {}

  getRegisteredMails = () : Observable < any > => {
    return this
      .http
      .get(endpoints.REGISTERED_MAILS);
  }

}
