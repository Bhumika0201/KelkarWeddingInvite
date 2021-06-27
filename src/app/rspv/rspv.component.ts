import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {GuestsService} from '../guests.service';
@Component({
  selector: 'app-rspv',
  templateUrl: './rspv.component.html',
  styleUrls: ['./rspv.component.css']
})
export class RSPVComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),


   });

  constructor(private router: Router,private guestsService:GuestsService) { }

  ngOnInit() {

  }
  onSubmit() {

    let data = this.form.value;

   this.guestsService.createGuestslist(data)
       .then(res => {

       });
       this.router.navigate(['/Home']);
        alert('We Hope to see you  in our wedding');
}


}
