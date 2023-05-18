import { TestBed } from '@angular/core/testing';
import { ServeiUpdateService } from '../servei-update/servei-update.service';



describe('ServeiUpdateService', () => {
  let service: ServeiUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
