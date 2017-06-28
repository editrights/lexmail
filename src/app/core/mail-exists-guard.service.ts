import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {go} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MailRegistryService} from '../api/mail-registry.service';
import {MailMetadata} from '../api/models/MailMetadata';
import { Store } from '@ngrx/store';
import { State } from '../store/state/MainState';

@Injectable()
export class MailExistsGuardService implements CanActivate {

    constructor(private api: MailRegistryService, private store: Store<State>) {
    }

    canActivate(route: ActivatedRouteSnapshot) {
        return this.api.getRegisteredMails()
            .map((data: MailMetadata[]) => {
                const mail = route.params['name'];
                const canActivate = data.slice().map(elem => elem.internalName).includes(mail);

                if (canActivate) {
                    return true;
                } else {
                    this.store.dispatch(go(['/404']));
                }
            });
    }
}
