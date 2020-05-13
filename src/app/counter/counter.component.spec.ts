import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';
import { CounterHarness } from './counter-harness';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let harness: CounterHarness;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture(
      fixture,
      CounterHarness
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    // OnInitまでは安全
    expect(component).toBeTruthy();
  });

  it('should display count', async () => {
    component.count = 100;
    const displayCount = await harness.getDisplayedCount();
    expect(displayCount).toBe('100');
  });

  it('should emit increment', async () => {
    spyOn(component.increment, 'emit');

    await harness.increment();

    expect(component.increment.emit).toHaveBeenCalled();
  });
});
