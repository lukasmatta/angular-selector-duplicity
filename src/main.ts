import './polyfills';

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'same-name',
  standalone: true,
  template: 'standalone component',
})
export class StandaloneCmp {}

@Component({
  selector: 'same-name',
  template: 'component declared inside module',
})
export class SampleCmp {}

@Component({
  selector: 'main-component',
  template: `
  <h4>I would expect warning/error about the selector collision, not standalone component rendered two times.</h4>
  <same-name></same-name>
  `,
})
export class MainComponent {}

@NgModule({
  declarations: [MainComponent, SampleCmp],
  imports: [CommonModule, BrowserModule, StandaloneCmp],
  bootstrap: [MainComponent],
})
export class TestModule {}
platformBrowserDynamic()
  .bootstrapModule(TestModule)
  .catch((err) => console.error(err));
