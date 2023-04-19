import { TestBed } from '@angular/core/testing';
import { DadesServeisService } from './dades-serveis.service';


describe('DadesServeisService', () => {
  let service: DadesServeisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesServeisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
