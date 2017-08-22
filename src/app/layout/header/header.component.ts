import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() title: String;
    @Input() backEnabled: Boolean;
    @Input() sidebarActive: Boolean;
    @Input() backURL: string;
    @Input() backQuery: any = {};
    @Input() showControls: Boolean;
    @Input() searchURL: string;
    @Input() settingsURL: string;
    @Output() menuOpened = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

}
