import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [{
  path: 'profile',
  component: ProfileComponent
},
 {
   path: 'contact',
   component: ContactComponent
 }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
