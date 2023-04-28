import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreballadorFormEditComponent } from './treballador-form-edit.component';

describe('TreballadorFormEditComponent', () => {
  let component: TreballadorFormEditComponent;
  let fixture: ComponentFixture<TreballadorFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreballadorFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreballadorFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
