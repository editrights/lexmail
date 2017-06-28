import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {slideToHeader} from '../../animations/animations';

@Component({
    selector: 'app-mail-composer',
    templateUrl: './mail-composer.component.html',
    styleUrls: ['./mail-composer.component.scss'],
    animations: [
        slideToHeader()
    ]
})
export class MailComposerComponent implements OnInit {
    private headerTitle: string = 'Compose';
    private backEnabled: boolean = true;
    private backURL: string;

    constructor(private route: Router) {
        this.backURL = route.url.substring(0, route.url.indexOf('/new'));
    }

    ngOnInit() {
    }

}
