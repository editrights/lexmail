import {Component, OnInit, HostBinding} from '@angular/core';
import {routeChangeAnimation} from '../../animations/routeChange';
import {fadeIn, buttonShrink} from '../animations';

@Component({
    selector: 'app-add-mail-page',
    templateUrl: './add-mail-page.component.html',
    styleUrls: ['./add-mail-page.component.scss'],
    animations: [routeChangeAnimation, fadeIn(), buttonShrink()]
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
