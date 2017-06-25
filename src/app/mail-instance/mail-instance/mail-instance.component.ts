import {Component, OnInit, HostBinding} from '@angular/core';
import {routeChangeAnimation} from '../../animations/routeChange';
import {fabToggle} from '../../animations/fab_toggle';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../store/state/MainState';
import {MailContent, MailContentItem} from '../state/initialState';
import {getMailContent} from '../state/actions';

@Component({
    selector: 'app-mail-instance',
    templateUrl: './mail-instance.component.html',
    styleUrls: ['./mail-instance.component.scss'],
    animations: [
        routeChangeAnimation, fabToggle
    ]
})

export class MailInstanceComponent implements OnInit {
    headerTitle: string;
    activeLink: string;
    content: MailContent = <MailContent>{};
    backEnabled: Boolean = true;
    showHeaderControls: Boolean = true;
    items: Array<MailContentItem> = [];
    // @HostBinding('@routeChangeAnimation') routeChangeAnimation;

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
