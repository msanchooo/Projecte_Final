import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pack2Component } from './pack2.component';

describe('Pack2Component', () => {
  let component: Pack2Component;
  let fixture: ComponentFixture<Pack2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pack2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pack2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
