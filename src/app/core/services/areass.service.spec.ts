import { TestBed } from '@angular/core/testing';

import { AreassService } from './areass.service';

describe('AreassService', () => {
  let service: AreassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
