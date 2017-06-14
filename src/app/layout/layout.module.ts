import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  declarations: [FooterComponent, HeaderComponent, MainComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ]
})
export class LayoutModule { }
