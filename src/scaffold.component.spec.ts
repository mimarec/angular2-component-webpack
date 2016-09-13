import { TestBed, inject } from '@angular/core/testing';
import { ScaffoldComponent } from './scaffold.component';

describe('App', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaffoldComponent ]
    });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(ScaffoldComponent);
    expect(fixture.componentInstance instanceof ScaffoldComponent).toBe(true, 'should create TestComponent');
  });
  
});
