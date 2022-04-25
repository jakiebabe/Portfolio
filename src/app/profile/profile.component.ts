import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  title = 'Profile';
  ngOnInit(): void {
  }
  
  isShown: Boolean = false;

  page() {
    
    this.isShown = ! this.isShown;
  }

}
