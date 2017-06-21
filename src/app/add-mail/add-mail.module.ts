import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMailPageComponent } from './add-mail-page/add-mail-page.component';
import { routes } from './routing';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [AddMailPageComponent]
})
export class AddMailModule { }
