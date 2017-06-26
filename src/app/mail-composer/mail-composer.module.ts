import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MailComposerComponent} from './mail-composer/mail-composer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialComponentsModule} from '../material-components/material-components.module';
import {LayoutModule} from '../layout/layout.module';
import {routes} from './routing';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BrowserAnimationsModule,
        MaterialComponentsModule,
        LayoutModule
    ],
    exports: [RouterModule],
    declarations: [MailComposerComponent]
})
export class MailComposerModule {
}
