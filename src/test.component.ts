import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'test',
  template: '<h1 class="test">{{message}}</h1>',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  {
  message: string = 'Hello Test';
}
