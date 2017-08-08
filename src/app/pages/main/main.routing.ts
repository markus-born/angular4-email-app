import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailResolver } from '../../shared/resolvers';
import { MainComponent, MailListComponent, MailViewComponent, ComposeComponent } from './';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'inbox', 
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'compose',
        component: ComposeComponent
      },
      {
        path: ':folder',
        component: MailListComponent,
        resolve: {
          emails: EmailResolver
        }
      },
      {
        path: ':folder/:id',
        component: MailViewComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
