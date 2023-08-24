import { TestBed } from '@angular/core/testing';

import { AggridService } from './aggrid.service';

describe('AggridService', () => {
  let service: AggridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
