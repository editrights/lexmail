import {Action} from '@ngrx/store';
import * as actionTypes from './actionTypes';

export const changePageTitle: any = (payload) => {
    return {
        type: actionTypes.SET_PAGE_TITLE,
        payload
    }
};