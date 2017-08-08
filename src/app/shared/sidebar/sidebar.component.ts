import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  folders:any[] = [
    { name: 'Inbox', value: 'inbox' },
    { name: 'Sent', value: 'sent' },
    { name: 'Deleted', value: 'deleted' }
  ];

  constructor() {}
}
