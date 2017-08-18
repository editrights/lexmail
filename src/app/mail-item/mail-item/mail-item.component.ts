import {Component, OnInit, OnDestroy, HostBinding} from '@angular/core';
import {listAnimation, expandingFAB} from '../../animations/animations';
import {fabToggle} from '../../animations/fab_toggle';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../store/state/MainState';
import {MailContent, MailContentItem} from '../state/initialState';
import {getMailContent} from '../state/actions';
import {NavigationExtras} from '@angular/router';
import {go, replace} from '@ngrx/router-store';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-mail-item',
    templateUrl: './mail-item.component.html',
    styleUrls: ['./mail-item.component.scss'],
    animations: [
        fabToggle, listAnimation(), expandingFAB()
    ]
})
export class MailItemComponent implements OnInit, OnDestroy {
    headerTitle: string;
    activeLink: string;
    content: MailContent = <MailContent>{};
    fabExpansions: number = 0;
    fabState: string = 'normal';
    backEnabled: Boolean = true;
    backURL: string = '/mails';
    showHeaderControls: Boolean = true;
    items: Array<MailContentItem> = [];
    storeSub: Subscription;

    static filterVisibleItems(mailContent: MailContent, filter: string): Array<MailContentItem> {
        return mailContent[filter] || [];
    }

    constructor(private store: Store<State>, private route: ActivatedRoute, private router: Router) {

        this
            .route
            .params
            .subscribe(params => {
                this.headerTitle = params['name'];
                this.activeLink = params['box'];
                this.items = MailItemComponent.filterVisibleItems(this.content, params['box']);
                this
                    .store
                    .dispatch(getMailContent({
                        target: params['box'],
                        mailBox: this.headerTitle
                    }));
            });
    }

    expandFAB(): void {
        this.fabState = 'expand';
    }

    navigateToComposer(target: string): void {
        if (this.fabExpansions > 0) {
            const currentRoute = this.router.url.slice(0, this.router.url.lastIndexOf('/'));
            this.store.dispatch(go([currentRoute + '/draft/new']));
        } else {
            this.fabExpansions += 1;
        }
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

    ngOnInit() {
        this.storeSub = this
            .store
            .select('opened_mail')
            .subscribe((data: MailContent) => {
                this.content = <MailContent>data;
                this.items = MailItemComponent.filterVisibleItems(this.content, this.activeLink);
            });
    }

    ngOnDestroy() {
        this.storeSub.unsubscribe();
    }
}
