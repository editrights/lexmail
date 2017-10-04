import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routerReducer, RouterStoreModule} from '@ngrx/router-store';

import {AppComponent} from '../app.component';
import {StoreModule} from '@ngrx/store';
import {MainRouterModule} from '../core-router.module';
import MainReducer from '../store/reducers/MainReducer';
import dashboard from '../dashboard/state/reducer';
import opened_mail from '../mailbox/state/reducers';
import {AddMailModule} from '../add-mail/add-mail.module';
import {MailboxModule} from '../mailbox/mailbox.module';
import {MailComposerModule} from '../mail-composer/mail-composer.module';
import {MailExistsGuardService} from './mail-exists-guard.service';
import {SearchModule} from '../search/search.module';
import { SettingsModule} from '../settings/settings.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, FormsModule, HttpModule, StoreModule.provideStore({
            MainReducer,
            dashboard,
            opened_mail,
            router: routerReducer
        }),
        RouterStoreModule.connectRouter(),
        AddMailModule,
        MailComposerModule,
        MailboxModule,
        SearchModule,
        SettingsModule,
        MainRouterModule,
    ],
    providers: [MailExistsGuardService]
})
export class CoreModule {
}
