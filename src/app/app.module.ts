import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './profile/overview/overview.component';
import { WorkEducationComponent } from './profile/work-education/work-education.component';
import { HobbiesComponent } from './profile/hobbies/hobbies.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { SamplesComponent } from './profile/samples/samples.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageListComponent } from './admin/message-list/message-list.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './admin/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContactComponent,
    AboutComponent,
    OverviewComponent,
    WorkEducationComponent,
    HobbiesComponent,
    SkillsComponent,
    SamplesComponent,
    MessageListComponent,
    HomeComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
