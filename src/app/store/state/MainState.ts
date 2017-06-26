import {DashboardState, DashboardInitialState} from '../../dashboard/state/initialState';
import {MailContent, MailItemsState} from '../../mail-instance/state/initialState';
import { RouterState } from '@ngrx/router-store';

export interface State {
    dashboard: DashboardState;
    opened_mail: MailContent;
    router: RouterState;
}

export const initialState: State = {
    dashboard: DashboardInitialState,
    opened_mail: MailItemsState,
    router: {
        path: ''
    }
};
