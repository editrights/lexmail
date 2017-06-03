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

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    BrowserAnimationsModule,
    EffectsModule.run(DashboardEffects)
  ],
  declarations: [DashboardComponent, RegisteredMailsComponent],
  exports: [DashboardComponent],
  providers: [MailRegistryService]
})
export class DashboardModule { }
