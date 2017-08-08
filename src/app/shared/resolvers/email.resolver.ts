import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EmailService } from '../services';

@Injectable()
export class EmailResolver implements Resolve<any> {

  constructor(private emailService:EmailService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.emailService.getListByFolder(route.params.folder);
  }
}
