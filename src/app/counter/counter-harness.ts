// couter-harness.ts

import { ComponentHarness } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

export class CounterHarness extends ComponentHarness {
  static hostSelector = 'app-counter';

  private getDisplayCountLocator = this.locatorFor('.count-display');

  private getIncrementLocator = this.locatorFor(
    MatButtonHarness.with({
      text: 'Increment',
    })
  );

  async getDisplayedCount(): Promise<string> {
    const display = await this.getDisplayCountLocator();
    return await display.text();
  }

  async increment(): Promise<void> {
    const button = await this.getIncrementLocator();
    await button.click();
  }
}
