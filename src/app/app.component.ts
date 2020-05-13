import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = {
    count: 0,
  };

  incrementCounter() {
    this.counter.count++;
  }
  clearCounter() {
    this.counter.count = 0;
  }
}
