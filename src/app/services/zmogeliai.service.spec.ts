import { TestBed } from '@angular/core/testing';

import { ZmogeliaiService } from './zmogeliai.service';

describe('ZmogeliaiService', () => {
  let service: ZmogeliaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZmogeliaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
