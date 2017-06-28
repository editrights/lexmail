import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {MaterialComponentsModule} from '../material-components/material-components.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {ResizableDirective} from './resizable.directive';

@NgModule({
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterModule
    ],
    declarations: [FooterComponent, HeaderComponent, MainComponent, PageNotFoundComponent, ResizableDirective],
    exports: [
        HeaderComponent,
        FooterComponent,
        MainComponent,
        ResizableDirective
    ]
})
export class LayoutModule {
}
