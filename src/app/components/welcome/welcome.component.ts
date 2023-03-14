import { Component } from '@angular/core';
import { fadeInUpOnEnterAnimation } from 'angular-animations';

import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [fadeInUpOnEnterAnimation()],
})
export class WelcomeComponent {
  constructor(private cs: CommonService) {}
  currentStep = 1;
  jump = 1;
  roomName = '';
  players!: number;
  roomID!: number;
  avatars = [0, 1, 2, 3, 4];
  selectedAvatar!: String;
  name = '';

  namePattern = '^[a-zA-Z ]*$';
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep -= this.jump;
      this.jump = 1;
    }
  }
  nextStep(steps = 1) {
    if (this.currentStep < 5) {
      this.currentStep += steps;
      this.jump = steps;
    }
  }
  finish() {}
}
