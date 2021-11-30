import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hr2Component } from './hr2.component';

describe('Hr2Component', () => {
  let component: Hr2Component;
  let fixture: ComponentFixture<Hr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hr2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
