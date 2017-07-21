import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-content-header',
    templateUrl: './content-header.component.html',
    styleUrls: ['./content-header.component.scss'],
    animations: []
})
export class ContentHeaderComponent {
    @Input() sender: string;
    @Input() contentPreview: string;
    @Input() animationState: string = 'normal';
    @Output() animationDone: EventEmitter<any> = new EventEmitter();

    constructor() {
    }
}
