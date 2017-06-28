import {Component, OnInit, HostBinding} from '@angular/core';
import {routeChangeAnimation} from '../../animations/routeChange';
import {fadeIn, buttonShrink} from '../animations';
import {slideToHeader} from '../../animations/animations';

@Component({
    selector: 'app-add-mail-page',
    templateUrl: './add-mail-page.component.html',
    styleUrls: ['./add-mail-page.component.scss'],
    animations: [routeChangeAnimation, fadeIn(), buttonShrink(), slideToHeader()]
})
export class AddMailPageComponent implements OnInit {

    headerTitle: string = 'New provider';
    backEnabled: Boolean = true;
    backURL: string = '/mails';
    selectedProtocol: string;
    protocols = [
        {
            value: 'IMAP',
            viewValue: 'IMAP'
        }, {
            value: 'POP3',
            viewValue: 'POP3'
        }, {
            value: 'SMTP',
            viewValue: 'SMTP'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
