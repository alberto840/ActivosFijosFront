import { TestBed } from '@angular/core/testing';

import { GrupoActivoService } from './grupo-activo.service';

describe('GrupoActivoService', () => {
  let service: GrupoActivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoActivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
