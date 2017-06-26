import {Component, OnInit, HostBinding} from '@angular/core';
import {listAnimation, expandingFAB} from '../../animations/animations';
import {fabToggle} from '../../animations/fab_toggle';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../store/state/MainState';
import {MailContent, MailContentItem} from '../state/initialState';
import {getMailContent} from '../state/actions';
import {NavigationExtras} from '@angular/router';
import {go} from '@ngrx/router-store';

@Component({
    selector: 'app-mail-instance',
    templateUrl: './mail-instance.component.html',
    styleUrls: ['./mail-instance.component.scss'],
    animations: [
        fabToggle, listAnimation(), expandingFAB()
    ]
})

export class MailInstanceComponent implements OnInit {
    headerTitle: string;
    activeLink: string;
    content: MailContent = <MailContent>{};
    fabExpansions: number = 0;
    fabState: string = 'normal';
    backEnabled: Boolean = true;
    backURL: string = '/mails';
    backQuery: any;
    showHeaderControls: Boolean = true;
    items: Array<MailContentItem> = [];

    static filterVisibleItems(mailContent: MailContent, filter: string): Array<MailContentItem> {
        return mailContent[filter] || [];
    }

    constructor(private store: Store<State>, private route: ActivatedRoute, private router: Router) {

        this
            .route
            .params
            .subscribe(params => {
                this.headerTitle = params['name'];
            });

        this
            .route
            .queryParams
            .subscribe(params => {
                this.activeLink = params['target'];
                this.items = MailInstanceComponent.filterVisibleItems(this.content, params['target']);
                this
                    .store
                    .dispatch(getMailContent({
                        target: params['target'],
                        mailBox: this.headerTitle
                    }));
            });
    }

    expandFAB(): void {
        this.fabState = 'expand';
    }

    navigateToComposer(target: string): void {
        if (this.fabExpansions > 0) {
            const currentRoute = this.router.url.slice(0, this.router.url.indexOf('?'));
            this.store.dispatch(go([currentRoute + '/new']));
        } else {
            this.fabExpansions += 1;
        }
    }

    routerLinkActive(link): Boolean {
        return link.toLowerCase() === (this.activeLink
                ? this.activeLink.toLowerCase()
                : '');
    }

    ngOnInit() {
        this
            .store
            .select('opened_mail')
            .subscribe((data: MailContent) => {
                this.content = <MailContent>data;
                this.items = MailInstanceComponent.filterVisibleItems(this.content, this.activeLink);
            });
    }

}
