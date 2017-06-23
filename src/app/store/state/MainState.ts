import {DashboardState, DashboardInitialState} from '../../dashboard/state/initialState';
import {MailContent, MailItemsState} from '../../mail-instance/state/initialState';

export interface State {
    dashboard: DashboardState;
    opened_mail: MailContent;
}

export const initialState: State = {
    dashboard: DashboardInitialState,
    opened_mail: MailItemsState
};
