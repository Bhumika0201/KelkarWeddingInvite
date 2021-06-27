import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { WeddingHostsComponent } from './wedding-hosts/wedding-hosts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RSPVComponent } from './rspv/rspv.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';            // @agm/core
import { AgmDirectionModule } from 'agm-direction';
import { CountdownTimerModule } from 'ngx-countdown-timer';


//For fire base

import { environment } from "src/environments/environment";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import {GuestsService} from '../app/guests.service';
import { GuestlistComponent } from './guestlist/guestlist.component';
import { DelpicComponent } from './delpic/delpic.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    WeddingHostsComponent,
    ContactsComponent,
    RSPVComponent,
    HomeComponent,
    GuestlistComponent,
    DelpicComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQoKK2b-FcP__EN1XSM-SI7dnRz41QIyA'
    }),
    AngularFireStorageModule,
    CountdownTimerModule.forRoot(),
    AgmDirectionModule,
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),


    AngularFirestoreModule
  ],
  providers: [GuestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
