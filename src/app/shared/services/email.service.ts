import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IEmailModel } from '../models';

import * as data from '../../../assets/data/email.json';

declare var loki:any;

@Injectable()
export class EmailService {

  db:any;

  constructor(private http:Http) {
    this.init();
  }

  init() {
    this.db = new loki("data.json");
    let collection = this.getCollection();
    collection.insert(data);
    this.db.saveDatabase();
  }

  private getCollection() {
    let collection = this.db.getCollection('email');
    if (!collection) {
      collection = this.db.addCollection('email');
    }
    return collection;
  }
  
  getListByFolder(folder:string) {
    return this.getCollection().find({type: folder});
  }

  getMailByID(id:number) {
    return this.getCollection().get(id);
  }

  createNewEmail(email:IEmailModel) {
    email.type = 'sent';
    let collection = this.getCollection();
    collection.insert(email);
  }

  deleteEmail(id:number) {
    let record = this.getCollection().get(id);
    record.type = 'deleted';
    this.getCollection().update(record);
  }
}
