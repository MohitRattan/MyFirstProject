import { TestBed } from '@angular/core/testing';

import { NorthIndianMenuService } from './north-indian-menu.service';

describe('NorthIndianMenuService', () => {
  let service: NorthIndianMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorthIndianMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
