import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMaterialComponent } from './login-material.component';

describe('LoginMaterialComponent', () => {
  let component: LoginMaterialComponent;
  let fixture: ComponentFixture<LoginMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
