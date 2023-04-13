import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pack1Component } from './pack1.component';

describe('Pack1Component', () => {
  let component: Pack1Component;
  let fixture: ComponentFixture<Pack1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pack1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pack1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
