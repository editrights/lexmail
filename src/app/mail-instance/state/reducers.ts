import {Action} from '@ngrx/store';
import * as actionTypes from './actionTypes';
import {MailContent, MailItemsState} from './initialState';

const opened_mail = (state: MailContent = MailItemsState, action: Action) => {

    switch (action.type) {
        case actionTypes.GET_MAIL_CONTENT_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default opened_mail;
