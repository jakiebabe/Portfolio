import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile';

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.navigate(['/profile/overview']);
  }
  
  isShown: Boolean = false;


}
