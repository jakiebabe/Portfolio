import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component'

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
 }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
