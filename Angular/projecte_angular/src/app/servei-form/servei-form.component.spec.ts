import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeiFormComponent } from './servei-form.component';

describe('ServeiFormComponent', () => {
  let component: ServeiFormComponent;
  let fixture: ComponentFixture<ServeiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
