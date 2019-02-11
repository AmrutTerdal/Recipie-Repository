import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsNavComponent } from './components-nav.component';

describe('ComponentsNavComponent', () => {
  let component: ComponentsNavComponent;
  let fixture: ComponentFixture<ComponentsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
