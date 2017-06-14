import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports: [
    LoginPageComponent
  ],
  declarations: [LoginPageComponent]
})
export class AuthenticationModule { }
