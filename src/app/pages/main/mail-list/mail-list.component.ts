import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEmailModel } from '../../../shared/models';

@Component({
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  mails:IEmailModel[] = [];

  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { emails: any }) => {
      this.mails = data.emails;
    });
  }
}
