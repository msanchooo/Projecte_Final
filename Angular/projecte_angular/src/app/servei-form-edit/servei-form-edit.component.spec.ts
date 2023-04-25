import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeiFormEditComponent } from './servei-form-edit.component';

describe('ServeiFormEditComponent', () => {
  let component: ServeiFormEditComponent;
  let fixture: ComponentFixture<ServeiFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeiFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeiFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
