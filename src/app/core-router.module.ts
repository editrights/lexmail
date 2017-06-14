import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {AuthenticationModule} from './authentication/authentication.module';

import {MailInstanceModule} from './mail-instance/mail-instance.module';
import {MailInstanceComponent} from './mail-instance/mail-instance/mail-instance.component';
import {LoginPageComponent} from './authentication/login-page/login-page.component';

const appRoutes : Routes = [
  {
    path: 'mails',
    component: MailInstanceComponent
  }, {
    path: '',
    component: DashboardComponent
  }, {
    path: 'login',
    component: LoginPageComponent
  }
]

@NgModule({
  imports: [
    DashboardModule, MailInstanceModule, AuthenticationModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class MainRouterModule {}