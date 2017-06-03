import {Action} from '@ngrx/store';
import * as actionTypes from './actionTypes';

const dashboard = (state : any = {}, action : Action) => {

    switch (action.type) {
        case actionTypes.GET_REGISTERED_MAILS_SUCCESS:
            return Object.assign({}, state, {items: action.payload});
        default:
            return state;
    }
}

export default dashboard;