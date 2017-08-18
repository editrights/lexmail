import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as actionTypes from './actionTypes';
import {MailRegistryService} from '../../api/mail-registry.service';

@Injectable()
export class MailInstanceEffects {

    @Effect() getMailContent = this
        .action$
        .ofType(actionTypes.GET_MAIL_CONTENT)
        .switchMap(action => {
            return this
                .mailRegistryService
                .getMailContents()
                .map(res => ({
                    type: actionTypes.GET_MAIL_CONTENT_SUCCESS,
                    payload: this.formatData(res, action.payload.mailBox, action.payload.target)
                }))
                .catch(() => Observable.of({type: actionTypes.GET_MAIL_CONTENT_ERROR}));
        });

    constructor(private action$: Actions, private mailRegistryService: MailRegistryService) {
    }
    formatData(json: Array<Object>, mailBox: string, target: string) {
        const result = {};
        const target_data = json.filter(elem => elem['internalName'] === mailBox)[0] || {};
        result[target] = target_data[target];
        return result;
    }
}
