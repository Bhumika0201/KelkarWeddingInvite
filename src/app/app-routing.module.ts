import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { WeddingHostsComponent } from './wedding-hosts/wedding-hosts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RSPVComponent } from './rspv/rspv.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GuestlistComponent } from './guestlist/guestlist.component';
import { DelpicComponent } from './delpic/delpic.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Events',component:EventsComponent},
  {path:'Contacts',component:ContactsComponent},
  {path:'RSPV',component:RSPVComponent},
  {path:'Hosts',component:WeddingHostsComponent},
  {path:'Guests',component:GuestlistComponent},
  {path:'Delete',component:DelpicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
