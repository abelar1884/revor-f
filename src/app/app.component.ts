import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  clicks = 0;
  onChanged(increased: any) {
    increased === true ? this.clicks++ : this.clicks--;
  }
}
