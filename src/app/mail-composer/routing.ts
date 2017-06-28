/**
 * Created by zkirilov on 26.6.2017 г..
 */
import {Routes} from '@angular/router';
import {MailComposerComponent} from './mail-composer/mail-composer.component';
import {MailExistsGuardService} from '../core/mail-exists-guard.service';

export const routes: Routes = [
    {
        path: 'mails/:name/draft/new',
        component: MailComposerComponent,
        canActivate: [
            MailExistsGuardService
        ]
    }
];
