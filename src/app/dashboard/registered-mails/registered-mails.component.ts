import {Component, OnInit, Input} from '@angular/core';

@Component({selector: 'app-registered-mails', templateUrl: './registered-mails.component.html', styleUrls: ['./registered-mails.component.scss']})
export class RegisteredMailsComponent implements OnInit {

  constructor() {
    this.columns = 1;
    this.rowHeight = '40px';
    this.tileBackground = "#c2c2d6";
  }

  columns : number;
  rowHeight : string;
  tileBackground : string;

  @Input()mails : any[];

  ngOnInit() {}

  pickIcon(type) : string {
    let result = '';

    switch (type) {
      case 'gmail':
        result = '/assets/mail-providers/gmail.svg';
        break;
      case 'yahoo':
        result = '/assets/mail-providers/yahoo.svg';
        break;
      case 'outlook':
        result = '/assets/mail-providers/outlook.svg';
        break;
      default:
        result = '/assets/mail-providers/default.svg';
    }
    return result;
  }

}
