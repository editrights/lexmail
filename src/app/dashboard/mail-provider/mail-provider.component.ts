import {Component, Input, Output, HostBinding, EventEmitter, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {MailMetadata} from '../../api/models/MailMetadata';
import {expandingLogo, backInLine} from '../animations';
import {Router} from '@angular/router';

@Component({
    selector: 'app-mail-provider',
    templateUrl: './mail-provider.component.html',
    styleUrls: ['./mail-provider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        expandingLogo(),
        backInLine()
    ]
})
export class MailProviderComponent implements OnInit {
    @Input() data: MailMetadata;
    @Input() backInLineAnimate: string = 'normal';
    mailLogoState: string = 'normal';
    logoExpansions: number = 0;

    constructor(private router: Router) {
    }

    ngOnInit() {

    }
    onMailClick() {
        this.mailLogoState = 'expand';
    }

    navigateToMailContents() {
        if (this.logoExpansions > 0) {
            this.router.navigate([this.data.routerLink], {
                queryParams: {
                    target: 'inbox'
                }
            });
        } else {
            this.logoExpansions += 1;
        }
    }

    pickIcon(type): string {
        let result = '';
        switch (type) {
            case 'gmail':
                result = 'assets/mail-providers/gmail.svg';
                break;
            case 'yahoo':
                result = 'assets/mail-providers/yahoo.svg';
                break;
            case 'outlook':
                result = 'assets/mail-providers/outlook.svg';
                break;
            default:
                result = 'assets/mail-providers/default.svg';
        }
        return result;
    }
}
