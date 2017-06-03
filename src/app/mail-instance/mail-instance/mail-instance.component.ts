import {Component, OnInit} from '@angular/core';
import {routeChangeAnimation} from '../../animations/routeChange';

@Component({
  selector: 'app-mail-instance',
  templateUrl: './mail-instance.component.html',
  styleUrls: ['./mail-instance.component.scss'],
  animations: [routeChangeAnimation],
  host: {
    '[@routeChangeAnimation]': ''
  }
})
export class MailInstanceComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
