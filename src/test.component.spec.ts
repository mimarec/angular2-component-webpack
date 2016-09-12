import { TestBed, inject } from '@angular/core/testing';
import { TestComponent } from './test.component.ts';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(TestComponent);
    expect(fixture.componentInstance instanceof TestComponent).toBe(true, 'should create TestComponent');
  });
});
