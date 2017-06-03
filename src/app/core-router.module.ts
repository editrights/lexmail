import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module'
import {DashboardComponent} from './dashboard/dashboard/dashboard.component'

import {MailInstanceModule} from './mail-instance/mail-instance.module'
import {MailInstanceComponent} from './mail-instance/mail-instance/mail-instance.component'

const appRoutes : Routes = [
  {
    path: 'mails',
    component: MailInstanceComponent
  }, {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [
    DashboardModule, MailInstanceModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class MainRouterModule {}