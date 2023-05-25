import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormEditComponent } from './client-form-edit.component';

describe('ClientFormEditComponent', () => {
  let component: ClientFormEditComponent;
  let fixture: ComponentFixture<ClientFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
