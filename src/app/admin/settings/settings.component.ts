import { Component, OnInit } from '@angular/core';
import { Overview } from 'src/app/models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  overview: Overview = new Overview();
  
  title: string = 'Settings';
  constructor() { }

  ngOnInit(): void {
  }

}
