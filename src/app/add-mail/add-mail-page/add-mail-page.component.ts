import {Component, OnInit} from '@angular/core';
import {routeChangeAnimation, verticalSlide} from '../../animations/routeChange';

@Component({
  selector: 'app-add-mail-page',
  templateUrl: './add-mail-page.component.html',
  styleUrls: ['./add-mail-page.component.scss'],
  animations: [routeChangeAnimation],
  host: {
    '[@routeChangeAnimation]': ''
  }
})
export class AddMailPageComponent implements OnInit {

  constructor() {}

  headerTitle : string = 'New provider';
  backEnabled : Boolean = true;
  selectedProtocol : string;
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
  ]
  ngOnInit() {}

}
