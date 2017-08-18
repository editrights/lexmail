import {Component, Input, OnChanges} from '@angular/core';
import {MailContentItem} from '../state/initialState';
import {listAnimation} from '../../animations/animations';
import { expandOnClick } from '../animations';

@Component({
    selector: 'app-mail-items-list',
    templateUrl: './mail-items-list.component.html',
    styleUrls: ['./mail-items-list.component.scss'],
    animations: [
        listAnimation(), expandOnClick()
    ]
})

export class MailItemsListComponent implements OnChanges {
    @Input() items: Array<MailContentItem> = [];
    private receivedItems: string;
    private clickedContentHeader: number;

    constructor() {
    }

    ngOnChanges(data) {
        const hasChanges = data.items.currentValue !== data.items.previousValue;
        if (hasChanges) {
            this.receivedItems = 'pending';
        }
    }

    onListAnimationDone(): void {
        this.receivedItems = '';
    }
    onContentHeaderClick(index: number): void {
        this.clickedContentHeader = index;
        console.log(index);
    }
    getItemAnimationState(index: number) {
        if (index === this.clickedContentHeader) {
            return 'expand';
        }
        return 'normal';
    }
}
