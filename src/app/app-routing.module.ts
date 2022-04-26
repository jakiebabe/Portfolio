import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MessageListComponent } from './admin/message-list/message-list.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './profile/hobbies/hobbies.component';
import { OverviewComponent } from './profile/overview/overview.component';
import { ProfileComponent } from './profile/profile.component'
import { SamplesComponent } from './profile/samples/samples.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { WorkEducationComponent } from './profile/work-education/work-education.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent    
      }, {
        path: 'work-education',
        component: WorkEducationComponent
      }, {
        path: 'hobbies',
        component: HobbiesComponent
      }, {
        path: 'skills',
        component: SkillsComponent
      }, {
        path: 'samples',
        component: SamplesComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'message-list',
    component: MessageListComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    // canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
