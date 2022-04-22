import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HobbiesComponent } from './profile/hobbies/hobbies.component';
import { OverviewComponent } from './profile/overview/overview.component';
import { ProfileComponent } from './profile/profile.component'
import { SamplesComponent } from './profile/samples/samples.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { WorkEducationComponent } from './profile/work-education/work-education.component';

const routes: Routes = [{
  path: 'profile',
  component: ProfileComponent
},
 {
   path: 'contact',
   component: ContactComponent
 }, {
   path: 'about',
   component: AboutComponent
 }, {
   path: 'profile/overview',
   component : OverviewComponent
 }, {
  path: 'profile/work-education',
  component : WorkEducationComponent
}, {
  path: 'profile/hobbies',
  component : HobbiesComponent
}, {
  path: 'profile/skills',
  component : SkillsComponent
}, {
  path: 'profile/samples',
  component : SamplesComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
