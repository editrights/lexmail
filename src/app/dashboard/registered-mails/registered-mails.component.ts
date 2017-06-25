import { Component, OnInit, Input } from '@angular/core';
import { verticalSlide } from '../../animations/routeChange';
import { fabToggle } from '../../animations/fab_toggle';
import { expandingFAB } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-mails',
  templateUrl: './registered-mails.component.html',
  styleUrls: ['./registered-mails.component.scss'],
  animations: [fabToggle, expandingFAB()]
})

export class RegisteredMailsComponent implements OnInit {

  constructor(private router: Router) {
    this.columns = 1;
    this.rowHeight = '60px';
    this.tileBackground = "#ffffff";
  }

  columns: number;
  rowHeight: string;
  tileBackground: string;
  fabState: string = 'normal';
  fabExpansions: number = 0;

  @Input() mails: any[];

  ngOnInit() { }

  pickBackAnimation(mail: string): string {
    return '';
  }
  expandFAB(): void {
    this.fabState = 'expand';
  }
  navigateTo(target: string): void {
    if (this.fabExpansions > 0) {
      this.router.navigate([target]);
    } else {
      this.fabExpansions += 1;
    }

  }
}
