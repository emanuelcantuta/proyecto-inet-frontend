import { TestBed } from '@angular/core/testing';

import { EscuelaService } from './escuela.service';

describe('EscuelaService', () => {
  let service: EscuelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscuelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
