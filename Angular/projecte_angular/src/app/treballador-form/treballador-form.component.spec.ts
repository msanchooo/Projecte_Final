import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreballadorFormComponent } from './treballador-form.component';

describe('TreballadorFormComponent', () => {
  let component: TreballadorFormComponent;
  let fixture: ComponentFixture<TreballadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreballadorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreballadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
