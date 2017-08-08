import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SidebarComponent } from './sidebar';
import { EmailResolver } from './resolvers';
import { EmailService } from './services';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    HttpModule
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [
    EmailService,
    EmailResolver
  ],
  exports: [
    SidebarComponent, 
    CommonModule, 
    RouterModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
