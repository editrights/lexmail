import * as actionTypes from './actionTypes';
import {Action} from '@ngrx/store';

export const getMailContent = function (payload): Action {
    return {
        type: actionTypes.GET_MAIL_CONTENT,
        payload
    };
};