import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private routerSubscription: any;
    constructor(private router: Router) {
        this.routerSubscription = router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationStart): void => {
               
            });
    }
}
