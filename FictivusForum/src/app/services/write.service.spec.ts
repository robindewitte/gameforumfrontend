import { TestBed } from '@angular/core/testing';

import { Writeservice } from './write.service';

describe('WriteserviceService', () => {
  let service: Writeservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Writeservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
