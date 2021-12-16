import { TestBed } from '@angular/core/testing';

import { Readservice } from './read.service';

describe('ReadserviceService', () => {
  let service: Readservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Readservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
