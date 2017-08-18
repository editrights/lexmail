import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MailItemComponent} from './mail-item/mail-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '../layout/layout.module';
import {MaterialComponentsModule} from '../material-components/material-components.module';
import {RouterModule} from '@angular/router';
import {routes} from './routing';
import {MailItemsListComponent} from './mail-items-list/mail-items-list.component';
import {EffectsModule} from '@ngrx/effects';
import {MailInstanceEffects} from './state/effects';
import { MailContentComponent } from './mail-content/mail-content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BrowserAnimationsModule,
        LayoutModule,
        MaterialComponentsModule,
        EffectsModule.run(MailInstanceEffects)
    ],
    exports: [RouterModule],
    declarations: [MailItemComponent, MailItemsListComponent, MailContentComponent, ContentHeaderComponent]
})
export class MailInstanceModule {
}
