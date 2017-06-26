import {Component, Input, OnChanges} from '@angular/core';
import {MailContentItem} from '../state/initialState';
import {listAnimation} from '../../animations/animations';

@Component({
    selector: 'app-mail-items-list',
    templateUrl: './mail-items-list.component.html',
    styleUrls: ['./mail-items-list.component.scss'],
    animations: [
        listAnimation()
    ]
})

export class MailItemsListComponent implements OnChanges {
    @Input() items: Array<MailContentItem> = [];
    private receivedItems: string;

    constructor() {
    }

    ngOnChanges(data) {
        const hasChanges = data.items.currentValue !== data.items.previousValue;
        if (hasChanges) {
            this.receivedItems = 'pending';
        }
    }

    onListAnimationDone() {
        this.receivedItems = '';
    }
}
