import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdToolbarModule,
    MdToolbarRow,
    MdListModule,
    MdGridListModule,
    MdTabsModule,
    MdInputModule,
    MdIconModule,
    MdSelectModule,
    MdSidenavModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule, BrowserAnimationsModule, MdButtonModule, MdToolbarModule, MdListModule,
        MdGridListModule, MdInputModule, MdIconModule, MdSelectModule, MdSidenavModule
    ],
    declarations: [],
    exports: [MdButtonModule, MdToolbarModule,
        MdToolbarRow, MdListModule, MdGridListModule, MdTabsModule, MdInputModule, MdIconModule, MdSelectModule, MdSidenavModule]
})

export class MaterialComponentsModule {
}
