import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './store/state/MainState';
import {changePageTitle} from './store/actions/actions';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent {
  pageTitle = 'app works 2!';

  constructor(private store : Store < State >) {
    store
      .select('MainReducer')
      .subscribe((data : State) => {
        this.pageTitle = data.pageTitle;
      });

    setTimeout(function () {
      store.dispatch(changePageTitle('New Title'));
    }, 1000);
  }
}
