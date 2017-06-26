import {Component, Input, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {fabToggle} from '../../animations/fab_toggle';
import {expandingFAB} from '../animations';
import {Router} from '@angular/router';
import {go, RouterState} from '@ngrx/router-store';
import {Store} from '@ngrx/store';
import {State} from '../../store/state/MainState';
import {Subscription} from 'rxjs/Subscription';
import { MailMetadata } from '../../api/models/MailMetadata';

@Component({
    selector: 'app-registered-mails',
    templateUrl: './registered-mails.component.html',
    styleUrls: ['./registered-mails.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fabToggle, expandingFAB()]
})

export class RegisteredMailsComponent implements OnDestroy {
    columns: number;
    rowHeight: string;
    tileBackground: string;
    fabState: string = 'normal';
    fabExpansions: number = 0;
    previousURL: string;
    storeSub: Subscription;
    @Input() mails: MailMetadata[];

    constructor(private router: Router, private store: Store<State>) {
        this.columns = 1;
        this.rowHeight = '60px';
        this.tileBackground = '#ffffff';
        this.storeSub = this.store.select('router').subscribe((data: RouterState) => {
            if (!this.previousURL) {
                this.previousURL = data.path;
            }
        });
    }

    ngOnDestroy() {
        this.storeSub.unsubscribe();
    }

    expandFAB(): void {
        this.fabState = 'expand';
    }

    navigateTo(target: string): void {
        if (this.fabExpansions > 0) {
            this.store.dispatch(go([target]));
            // this.router.navigate([target]);
        } else {
            this.fabExpansions += 1;
        }
    }
    shouldAnimateBack(data: MailMetadata): string {
        if (this.previousURL.includes(data.routerLink)) {
            return 'backInLine';
        } else {
            return 'normal';
        }
    }
}
