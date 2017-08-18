/**
 * Created by zkirilov on 1.8.2017 г..
 */
import {MailMetadata} from '../../api/models/MailMetadata';
import {DashboardState} from './initialState';

export const selectRegisteredMails2 = (state): MailMetadata[] => {
    const registeredMails = state.items.map(elem => {
        return {
            ...elem,
            routerLink: `/mails/${elem.internalName}/inbox`
        };
    });
    return <MailMetadata[]>registeredMails;
};

export const selectRegisteredMails = (store) => {

    return store
        .select('dashboard')
        .map((state: DashboardState) => {
            const registeredMails = state.items.map((elem: MailMetadata) => {
                return {
                    ...elem,
                    routerLink: `/mails/${elem.internalName}/inbox`
                };
            });
            return <MailMetadata[]>registeredMails;
        });
};
