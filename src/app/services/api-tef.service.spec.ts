import { TestBed } from '@angular/core/testing';

import { ApiTefService } from './api-tef.service';

describe('ApiTefService', () => {
  let service: ApiTefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
