import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialComponentsModule} from '../material-components/material-components.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { routes } from './routing';

@NgModule({
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SearchComponent]
})
export class SearchModule {
}
