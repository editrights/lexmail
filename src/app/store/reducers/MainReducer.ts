import {ActionReducer, Action} from '@ngrx/store';
import {State, initialState} from '../state/MainState';
import * as actionTypes from '../actions/actionTypes';

const MainReducer: ActionReducer<State> = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.SET_PAGE_TITLE:
            return Object.assign({}, state, {pageTitle: action.payload});
        default:
            return state;

    }
}
export default MainReducer;