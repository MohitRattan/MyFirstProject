import { TestBed } from '@angular/core/testing';

import { SouthIndianMenuService } from './south-indian-menu.service';

describe('SouthIndianMenuService', () => {
  let service: SouthIndianMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SouthIndianMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
