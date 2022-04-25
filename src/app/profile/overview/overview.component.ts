import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Overview } from 'src/app/models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title = 'Overview';
  overview: Overview = new Overview();

  constructor() { }
  
  ngOnInit(): void {
    
  }
  readOnly: Boolean = true;
  editStatus: string = 'Update';
  edit() {
    if (this.editStatus == 'Update' ) {
      this.editStatus = 'Save';
      this.readOnly = false;
    }
    else {
      this.editStatus = 'Update';
      this.readOnly = true;
      console.log(this.overview); 
    }
  }
}
