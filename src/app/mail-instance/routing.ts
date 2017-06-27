import {Routes} from '@angular/router';
import {MailInstanceComponent} from './mail-instance/mail-instance.component';
import {MailContentComponent} from './mail-content/mail-content.component';
import {MailExistsGuardService} from '../core/mail-exists-guard.service';

export const routes: Routes = [
    {
        path: 'mails/:name/:box',
        component: MailInstanceComponent,
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
        path: 'mails/:name/:box/:mail',
        component: MailContentComponent,
        pathMatch: 'full',
        canActivate: [
            MailExistsGuardService
        ]
    }
];
