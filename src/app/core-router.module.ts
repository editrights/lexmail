import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {LayoutModule} from './layout/layout.module';

import {MailboxModule} from './mailbox/mailbox.module';
import {LoginPageComponent} from './authentication/login-page/login-page.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'mails',
    component: DashboardComponent,
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginPageComponent
  }, {
    path: '',
    redirectTo: 'mails',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    DashboardModule, MailboxModule, AuthenticationModule, LayoutModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class MainRouterModule {}