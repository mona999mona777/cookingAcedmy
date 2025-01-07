import { TestBed } from '@angular/core/testing';

import { IngratService } from './ingrat.service';

describe('IngratService', () => {
  let service: IngratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
