import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {getRegisteredMails} from '../state/actions';
import {Store} from '@ngrx/store';
import {State} from '../../store/state/MainState';
import {MailMetadata} from '../../api/models/MailMetadata';
import {Observable} from 'rxjs/Observable';
import {selectRegisteredMails} from '../state/selectors';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [],
})
export class DashboardComponent implements OnInit {
    headerTitle: String = 'Dashboard';
    registeredMails: Observable<MailMetadata[]>;
    showHeaderControls: Boolean = true;
    sidebarOpened = false;

    constructor(private store: Store<State>) {}

    ngOnInit() {
        this
            .store
            .dispatch(getRegisteredMails());
        this.registeredMails = selectRegisteredMails(this.store);
    }
    handleMenuOpen(): void {
        this.sidebarOpened = true;
    }
    handleMenuClose(): void {
        this.sidebarOpened = false;
    }
}
