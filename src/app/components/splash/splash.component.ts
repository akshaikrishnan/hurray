import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/onboard']); // Replace "your-route" with the actual route you want to navigate to
    }, 1500);
  }
}
