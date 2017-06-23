import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MailMetadata } from '../../api/models/MailMetadata';
import { diagonalSlide } from '../animations';

@Component({
  selector: 'app-mail-provider',
  templateUrl: './mail-provider.component.html',
  styleUrls: ['./mail-provider.component.scss'],
  animations: [
    diagonalSlide('*')
  ]
})
export class MailProviderComponent implements OnInit {
  @Input() data: MailMetadata;
  private topCoord: string = '*';
  @HostBinding('@diagonalSlide') @Input() transitionState: string;
  constructor() { }

  ngOnInit() { }
  pickIcon(type): string {
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
