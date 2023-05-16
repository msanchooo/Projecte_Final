import { TestBed } from '@angular/core/testing';

import { DadesUsersService } from './dades-users.service';

describe('DadesUsersService', () => {
  let service: DadesUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
