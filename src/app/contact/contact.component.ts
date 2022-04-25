import { Component, OnInit } from '@angular/core';
import { Contact } from '../models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contact';
  contact: Contact = new Contact();

  Contact: Contact[] = [
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

  Submit() {
    alert("test");
    console.log(JSON.stringify(this.contact));

  }
  add(models: Contact) {
    this.Contact.push(models);
  }
}
