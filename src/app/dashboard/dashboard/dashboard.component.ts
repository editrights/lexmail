import {Component, OnInit} from '@angular/core';
import {routeChangeAnimation} from '../../animations/routeChange';
import {getRegisteredMails} from '../state/actions';
import {Store} from '@ngrx/store';
import {State} from '../../store/state/MainState';
import {DashboardState} from '../state/initialState';
import {MailMetadata} from '../../api/models/MailMetadata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routeChangeAnimation],
  host: {
    '[@routeChangeAnimation]': ''
  }
})
export class DashboardComponent implements OnInit {

  constructor(private store : Store < State >) {}
  headerTitle : String = 'Dashboard';
  registeredMails : MailMetadata[] = [];
  showHeaderControls: Boolean = true;
  ngOnInit() {
    this
      .store
      .dispatch(getRegisteredMails());

    this
      .store
      .select('dashboard')
      .subscribe((data : DashboardState) => {
        this.registeredMails = <MailMetadata[]>data.items;
        this.registeredMails = this.registeredMails.map(elem => {
          return Object.assign(elem, {
            routerLink: `/mails/${elem.internalName}`
          });
        })
      });
  }
}
