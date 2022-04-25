import { Component, OnInit } from '@angular/core';
import { Overview } from 'src/app/models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  overview: Overview = new Overview();
  readOnly: Boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.readOnly = true;
  }
}
