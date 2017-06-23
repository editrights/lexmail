import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() title: String;
  @Input() backEnabled: Boolean;
  @Input() showControls: Boolean;

  ngOnInit() {
  }

}
