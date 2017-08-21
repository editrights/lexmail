import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {MaterialComponentsModule} from '../material-components/material-components.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {ResizableDirective} from './resizable.directive';
import { TabNavComponent } from './tab-nav/tab-nav.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterModule
    ],
    declarations: [FooterComponent, HeaderComponent, MainComponent, PageNotFoundComponent, ResizableDirective, TabNavComponent],
    exports: [
        HeaderComponent,
        TabNavComponent,
        FooterComponent,
        MainComponent,
        ResizableDirective
    ]
})
export class LayoutModule {
}
