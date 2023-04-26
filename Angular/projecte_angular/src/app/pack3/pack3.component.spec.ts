import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pack3Component } from './pack3.component';

describe('Pack3Component', () => {
  let component: Pack3Component;
  let fixture: ComponentFixture<Pack3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pack3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pack3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
