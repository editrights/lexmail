import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as actionTypes from './actionTypes';
import { MailRegistryService } from '../../api/mail-registry.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class DashboardEffects {

    @Effect() getRegisteredMails = this
        .action$
        .ofType(actionTypes.GET_REGISTERED_MAILS)
        .switchMap(action => {
            return this
                .mailRegistryService
                .getRegisteredMails();
        })
        .map(res => ({
            type: actionTypes.GET_REGISTERED_MAILS_SUCCESS,
            payload: res
        }))
        .catch(() => Observable.of({ type: actionTypes.GET_REGISTERED_MAILS_ERROR }));

    constructor(private action$: Actions, private mailRegistryService: MailRegistryService) {
    }
}
