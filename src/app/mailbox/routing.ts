import {Routes} from '@angular/router';
import {MailboxComponent} from './mailbox/mailbox';
import {MailContentComponent} from './mail-content/mail-content.component';
import {MailExistsGuardService} from '../core/mail-exists-guard.service';

export const routes: Routes = [
    {
        path: 'mails/:name/:box',
        component: MailboxComponent,
        pathMatch: 'full',
        canActivate: [
            MailExistsGuardService
        ]
    }, {
        path: 'mails/:name',
        redirectTo: 'mails/:name/inbox',
        pathMatch: 'full',
        canActivate: [
            MailExistsGuardService
        ]
    }, {
        path: 'mails/:name/:box/:mailId',
        component: MailContentComponent,
        pathMatch: 'full',
        canActivate: [
            MailExistsGuardService
        ]
    }
];
