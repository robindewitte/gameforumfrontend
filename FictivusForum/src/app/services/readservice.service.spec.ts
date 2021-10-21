import { TestBed } from '@angular/core/testing';

import { ReadserviceService } from './readservice.service';

describe('ReadserviceService', () => {
  let service: ReadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
