import {Routes} from '@angular/router';
import {AddMailPageComponent} from './add-mail-page/add-mail-page.component';

export const routes : Routes = [
    {
        path: 'add-mail',
        component: AddMailPageComponent,
        pathMatch: 'full'
    }
]