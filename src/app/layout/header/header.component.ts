import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: String;
  @Input() backEnabled: Boolean;
  @Input() backURL: string;
  @Input() backQuery: any = {};
  @Input() showControls: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
