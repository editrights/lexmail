import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsMainComponent} from './settings-main/settings-main.component';
import {RouterModule} from '@angular/router';
import {routes} from './routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SettingsMainComponent]
})
export class SettingsModule {
}
