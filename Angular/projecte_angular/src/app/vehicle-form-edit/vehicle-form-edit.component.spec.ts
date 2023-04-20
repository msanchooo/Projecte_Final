import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFormEditComponent } from './vehicle-form-edit.component';

describe('VehicleFormEditComponent', () => {
  let component: VehicleFormEditComponent;
  let fixture: ComponentFixture<VehicleFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
