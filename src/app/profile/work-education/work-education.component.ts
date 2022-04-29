import { Component, OnInit } from '@angular/core';
import { WorkEducation } from 'src/app/models';

@Component({
  selector: 'app-work-education',
  templateUrl: './work-education.component.html',
  styleUrls: ['./work-education.component.css']
})
export class WorkEducationComponent implements OnInit {

  workEducation: WorkEducation = new WorkEducation();
  title = 'Work and Education';
  
  WorkEducation = {
    primary: 'Castañas National Elementary School',
    primaryLocation: 'Sariaya, Quezon',
    secondary: 'Castañas National High School',
    secondaryLocation: 'Sariaya, Quezon',
    seniorSecondary: 'College of Sciences, Technology and Communications, Inc.',
    seniorSecondaryLocation: 'Sariaya, Quezon',
    tertiary: 'College of Sciences, Technology and Communications, Inc.',
    tertiaryLocation: 'Sariaya, Quezon',
    internship: 'Teligent Systems, Inc.',
    internshipLocation: 'Makati, Philippines',
    experience: 'N/A',
    current: 'N/A',
    currentLocation: 'N/A'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
