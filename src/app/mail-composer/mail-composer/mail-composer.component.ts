import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-composer',
  templateUrl: './mail-composer.component.html',
  styleUrls: ['./mail-composer.component.scss']
})
export class MailComposerComponent implements OnInit {
  private headerTitle: string = 'Compose';
  private backEnabled: boolean = true;
  private backURL: string;
  private backQuery: any = {target: 'inbox'};
  constructor(private route: Router) {
      this.backURL = route.url.substring(0, route.url.indexOf('/new'));
  }

  ngOnInit() {
  }

}
