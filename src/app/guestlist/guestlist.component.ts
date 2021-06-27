import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {GuestsService} from '../guests.service';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  constructor(private router: Router,private guestsService:GuestsService) { }

  ngOnInit() {
    this.getGuestList();
  }
  guestlist;
  getGuestList = () =>
  this.guestsService
    .getGuestsList()
    .subscribe(res => (this.guestlist = res));

deleteGuest = data => this.guestsService.deleteGuest(data);

}
