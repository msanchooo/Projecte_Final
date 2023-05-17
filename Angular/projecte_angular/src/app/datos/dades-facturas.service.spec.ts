import { TestBed } from '@angular/core/testing';

import { DadesFacturasService } from './dades-facturas.service';

describe('DadesFacturasService', () => {
  let service: DadesFacturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesFacturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
