import * as actionTypes from './actionTypes';
import {Action} from '@ngrx/store';

export const getRegisteredMails = function() {
    return {
        type: actionTypes.GET_REGISTERED_MAILS
    }
}