import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageListComponent } from '../admin/message-list/message-list.component';
import { Contact } from '../models';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'Message sent successfully.',
}
];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild(MessageListComponent, { static: false }) messageListComponent?: MessageListComponent;
  alerts?: Alert[];
  title = 'Contact';
  contact: Contact = new Contact();


  constructor() { }

  ngOnInit(): void {
  }

  Submit() {
    this.alerts = Array.from(ALERTS);
    this.messageListComponent?.add(this.contact);
    console.log(JSON.stringify(this.contact));
  }

}
