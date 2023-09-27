import { TestBed } from '@angular/core/testing';

import { ActividadesUserService } from './actividades-user.service';

describe('ActividadesUserService', () => {
  let service: ActividadesUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
