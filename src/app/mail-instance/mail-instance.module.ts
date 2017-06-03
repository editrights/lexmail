import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailInstanceComponent } from './mail-instance/mail-instance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [MailInstanceComponent]
})
export class MailInstanceModule { }
