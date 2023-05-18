import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDownloadComponent } from './factura-download.component';

describe('FacturaDownloadComponent', () => {
  let component: FacturaDownloadComponent;
  let fixture: ComponentFixture<FacturaDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
