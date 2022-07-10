import './polyfills';

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'same-name',
  template: 'first component',
})
export class FirstCmp {}

@Component({
  selector: 'same-name',
  template: 'second component',
})
export class SecondCmp {}

@Component({
  selector: 'main-component',
  template: `
  <h4>I would expect warning/error about the selector collision, not the first component rendered two times.</h4>
  <same-name></same-name>
  `,
})
export class MainComponent {}

@NgModule({
  declarations: [MainComponent, FirstCmp, SecondCmp],
  imports: [CommonModule, BrowserModule],
  bootstrap: [MainComponent],
})
export class TestModule {}
platformBrowserDynamic()
  .bootstrapModule(TestModule)
  .catch((err) => console.error(err));
