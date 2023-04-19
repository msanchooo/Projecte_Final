import { TestBed } from '@angular/core/testing';

import { DadesClientsService } from './dades-clients.service';

describe('DadesClientsService', () => {
  let service: DadesClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
