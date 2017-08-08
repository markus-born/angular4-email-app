import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { IEmailModel } from '../../../shared/models';

import { EmailService } from '../../../shared/services';

@Component({
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements AfterViewInit {
  @ViewChild('composeModal') composeModal:any;

  mail:IEmailModel = <IEmailModel>{
    from: 'demo@gmail.com'
  };

  constructor(private location:Location, private emailService:EmailService) {}

  ngAfterViewInit() {
    this.composeModal.show();
  }

  private return() {
    this.location.back();
  }

  cancel() {
    this.return();
  }

  createNewMail() {
    this.mail.type = 'sent';
    this.emailService.createNewEmail(this.mail);
    this.return();
  }
}
