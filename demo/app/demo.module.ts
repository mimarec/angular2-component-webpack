import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { TestModule } from '../../src/test.module.ts'

@NgModule({
  imports: [
    BrowserModule,
    TestModule
  ],
  declarations: [
    DemoComponent
  ],
  bootstrap: [ DemoComponent ]
})
export class DemoModule { }
