import {Routes} from '@angular/router';
import {MailInstanceComponent} from './mail-instance/mail-instance.component';

export const routes : Routes = [
    {
        path: 'mails/:name',
        component: MailInstanceComponent
    }
]