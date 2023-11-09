import { TestBed } from '@angular/core/testing';

import { XlsReporteService } from './xls-reporte.service';

describe('XlsReporteService', () => {
  let service: XlsReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XlsReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
