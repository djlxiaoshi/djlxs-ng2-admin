import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2RouterComponent } from './child2-router.component';

describe('Child2RouterComponent', () => {
  let component: Child2RouterComponent;
  let fixture: ComponentFixture<Child2RouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2RouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2RouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
