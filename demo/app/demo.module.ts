import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ScaffoldModule } from '../../src/scaffold.module';

import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    BrowserModule,
    ScaffoldModule
  ],
  declarations: [ DemoComponent ],
  bootstrap: [ DemoComponent ]
})
export class DemoModule { }
