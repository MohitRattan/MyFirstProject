import { TestBed } from '@angular/core/testing';

import { PunjabiMenuService } from './punjabi-menu.service';

describe('PunjabiMenuService', () => {
  let service: PunjabiMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunjabiMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
