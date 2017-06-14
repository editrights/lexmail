import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdToolbarModule, MdToolbarRow, MdGridListModule, MdTabsModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MdButtonModule, MdToolbarModule, MdGridListModule, MdInputModule
  ],
  
  declarations: [],
  exports: [MdButtonModule, MdToolbarModule, MdToolbarRow, MdGridListModule, MdTabsModule, MdInputModule]
})
export class MaterialComponentsModule {}