import { Component, OnInit, Input } from '@angular/core';
import { verticalSlide } from '../../animations/routeChange';
import { fabToggle } from '../../animations/fab_toggle';

@Component({
  selector: 'app-registered-mails',
  templateUrl: './registered-mails.component.html',
  styleUrls: ['./registered-mails.component.scss'],
  animations: [fabToggle]
})

export class RegisteredMailsComponent implements OnInit {

  constructor() {
    this.columns = 1;
    this.rowHeight = '60px';
    this.tileBackground = "#ffffff";
  }

  columns: number;
  rowHeight: string;
  tileBackground: string;

  @Input() mails: any[];

  ngOnInit() { }

  pickBackAnimation(mail: string): string {
      return '';
  }
}
