import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1RouterComponent } from './child1-router.component';

describe('Child1RouterComponent', () => {
  let component: Child1RouterComponent;
  let fixture: ComponentFixture<Child1RouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1RouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1RouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
