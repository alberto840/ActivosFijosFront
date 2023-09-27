import { TestBed } from '@angular/core/testing';

import { ActividadesUsersService } from './actividades-users.service';

describe('ActividadesUsersService', () => {
  let service: ActividadesUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
