import { TestBed } from '@angular/core/testing';

import { DadesVehiclesService } from './dades-vehicles.service';

describe('DadesVehiclesService', () => {
  let service: DadesVehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesVehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
