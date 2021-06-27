import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'EweddingCard';
   sound = new Howl({
    src: [ '../assets/music.mp3']
  });

  ngOnInit() {
    // Play the sound.
    this.sound.play();

    // Change global volume.
    Howler.volume(0.5);
  }
}
