import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsButtonComponent } from './forms-button.component';

describe('FormsButtonComponent', () => {
  let component: FormsButtonComponent;
  let fixture: ComponentFixture<FormsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
