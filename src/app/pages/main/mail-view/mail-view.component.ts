import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmailService } from '../../../shared/services';
import { IEmailModel } from '../../../shared/models';

@Component({
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {
  mail:IEmailModel = <any>{};
  mailId:any;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private emailService:EmailService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.mailId = params.id;
      this.mail = this.emailService.getMailByID(this.mailId);
    });
  }

  delete() {
    this.emailService.deleteEmail(this.mailId);
    this.router.navigate(['/deleted', this.mailId]);
  }
}
