import { Component, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import { MailMetadata } from '../../api/models/MailMetadata';
import { diagonalSlide, expandingLogo } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-provider',
  templateUrl: './mail-provider.component.html',
  styleUrls: ['./mail-provider.component.scss'],
  animations: [
    diagonalSlide('*'),
    expandingLogo()
  ]
})
export class MailProviderComponent {
  @Input() data: MailMetadata;
  @HostBinding('@diagonalSlide') @Input() transitionState: string;
  mailLogoState: string = 'normal';
  logoExpansions: number = 0;
  constructor(private router: Router) { }

  onMailClick() {
    this.mailLogoState = 'expand';
  }
  navigateToMailContents() {
    if (this.logoExpansions > 0) {
      this.router.navigate([this.data.routerLink], {
        queryParams: {
          target: 'inbox'
        }
      });
    } else {
      this.logoExpansions += 1;
    }
  }
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
