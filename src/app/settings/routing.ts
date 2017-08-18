import {Routes} from '@angular/router';
import {SettingsMainComponent} from './settings-main/settings-main.component';

export const routes: Routes = [
    {
        path: 'settings/:target',
        component: SettingsMainComponent,
    }
];
