import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreballadorListComponent } from './treballador-list.component';

describe('TreballadorListComponent', () => {
  let component: TreballadorListComponent;
  let fixture: ComponentFixture<TreballadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreballadorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreballadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
