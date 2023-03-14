import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-final-screen',
  templateUrl: './final-screen.component.html',
  styleUrls: ['./final-screen.component.scss'],
})
export class FinalScreenComponent {
  userData: any;
  constructor(private cs: CommonService) {
    cs.userData.subscribe((data) => {
      this.userData = data;
      console.log(data);
    });
  }
}
