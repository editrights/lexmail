import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { RegisteredMailsComponent } from './registered-mails/registered-mails.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './state/effects';
import { MailRegistryService } from '../api/mail-registry.service';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { MailProviderComponent } from './mail-provider/mail-provider.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    EffectsModule.run(DashboardEffects)
  ],
  declarations: [DashboardComponent, RegisteredMailsComponent, MailProviderComponent],
  exports: [DashboardComponent],
  providers: [MailRegistryService]
})
export class DashboardModule { }
