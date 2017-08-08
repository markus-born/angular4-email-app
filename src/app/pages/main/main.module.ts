import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';

import { SharedModule } from '../../shared/shared.module';
import { MainComponent, MailListComponent, MailViewComponent, ComposeComponent } from '.';
import { routing } from './main.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    routing,
    Ng2BootstrapModule.forRoot(),
    CKEditorModule,
    SharedModule
  ],
  exports: [
    MainComponent,
    MailListComponent,
    MailViewComponent,
    ComposeComponent,
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    MailListComponent,
    MailViewComponent,
    ComposeComponent
  ]
})
export class MainModule {}
