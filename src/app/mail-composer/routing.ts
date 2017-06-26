/**
 * Created by zkirilov on 26.6.2017 г..
 */
import {Routes} from '@angular/router';
import {MailComposerComponent} from './mail-composer/mail-composer.component';

export const routes: Routes = [
    {
        path: 'mails/:name/new',
        component: MailComposerComponent
    }
];
