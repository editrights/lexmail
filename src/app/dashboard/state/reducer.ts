import {Action} from '@ngrx/store';
import * as actionTypes from './actionTypes';
import {DashboardInitialState, DashboardState} from './initialState';

const dashboard = (state : DashboardState = DashboardInitialState, action : Action) => {

    switch (action.type) {
        case actionTypes.GET_REGISTERED_MAILS_SUCCESS:
            return Object.assign({}, state, {items: action.payload});
        default:
            return state;
    }
}

export default dashboard;