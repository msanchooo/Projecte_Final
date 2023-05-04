import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeiListComponent } from './servei-list.component';

describe('ServeiListComponent', () => {
  let component: ServeiListComponent;
  let fixture: ComponentFixture<ServeiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
