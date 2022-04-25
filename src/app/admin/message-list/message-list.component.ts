import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  contact: Contact[] = [
    {
      email: 'testmail@mail.com',
      text: 'test1',
      date: new Date()
    },
    {
      email: 'testmail1@mail.com',
      text: 'test2',
      date: new Date()
    },
    {
      email: 'testmail2@mail.com',
      text: 'test3',
      date: new Date()
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  add(models: Contact) {
    this.contact.push(models);
  }
}
