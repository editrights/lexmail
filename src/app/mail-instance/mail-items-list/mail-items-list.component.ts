import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {fadeIn} from '../../animations/fadeIn';
import {MailContentItem} from '../state/initialState';

@Component({
    selector: 'app-mail-items-list',
    templateUrl: './mail-items-list.component.html',
    styleUrls: ['./mail-items-list.component.scss'],
    animations: [
        fadeIn
    ]
})

export class MailItemsListComponent implements OnInit{
    @Input() items: Array<MailContentItem> = [];

    constructor() {
    }

    ngOnInit() {
    }
}
