import { TestBed } from '@angular/core/testing';

import { DadesTreballadorsService } from './dades-treballadors.service';

describe('DadesTreballadorsService', () => {
  let service: DadesTreballadorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesTreballadorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
