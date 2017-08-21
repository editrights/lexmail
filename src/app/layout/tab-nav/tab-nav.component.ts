import {Component, Input} from '@angular/core';
import {replace} from '@ngrx/router-store';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../store/state/MainState';

@Component({
    selector: 'app-tab-nav',
    templateUrl: './tab-nav.component.html',
    styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent {
    @Input() activeLink: string;
    constructor(private router: Router, private store: Store<State>) {
    }

    composeInnerLink(box: string): string {
        const base = this.router.url.slice(0, this.router.url.lastIndexOf('/'));
        const result = `${base}/${box}`;

        return result;
    }

    navigateTo(box: string): void {
        const url = this.composeInnerLink(box);
        this.store.dispatch(replace([url]));
    }

    routerLinkActive(link): Boolean {
        return link.toLowerCase() === (this.activeLink
            ? this.activeLink.toLowerCase()
            : '');
    }

}
