import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sound-button',
  standalone: false,
  templateUrl: './sound-button.component.html',
  styleUrl: './sound-button.component.scss',
})
export class SoundButtonComponent {
  @Input() text: string | undefined;
  apiKey = 'c7a4bbd31a504d4599180b4985dc8852';
  audio = new Audio();

  playSound() {
    if (!this.text) {
      throw Error('Word is undefined');
      return;
    }

    this.audio.currentTime = 0;
    this.audio.src = `https://api.voicerss.org/?key=${this.apiKey}&hl=fr-fr&src=${this.text}`;
    this.audio.load();
    this.audio.play();
  }
}
