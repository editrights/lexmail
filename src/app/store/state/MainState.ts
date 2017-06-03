import {DashboardState, DashboardInitialState} from '../../dashboard/state/initialState';

export interface State {
    pageTitle: string;
    dashboard: DashboardState
};

export const initialState: State = {
    pageTitle: 'Home',
    dashboard: DashboardInitialState
};
