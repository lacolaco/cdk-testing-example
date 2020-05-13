import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input()
  count: number;

  @Output()
  increment = new EventEmitter<void>();

  @Output()
  clear = new EventEmitter<void>();

  onClickIncrementButton() {
    this.increment.emit();
  }

  onClickClearButton() {
    this.clear.emit();
  }
}
