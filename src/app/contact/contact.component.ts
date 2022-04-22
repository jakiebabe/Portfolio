import { Component, OnInit } from '@angular/core';
import { Contact } from '../models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();
  constructor() { }

  ngOnInit(): void {
  }

  Submit() {
    alert("test");
    console.log(JSON.stringify(this.contact));
  }
}
