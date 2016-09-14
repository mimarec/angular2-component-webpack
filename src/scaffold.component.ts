import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scaffold',
  template: require('./scaffold.component.html'),
  styles: [ require('./scaffold.component.css') ]
})
export class ScaffoldComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}