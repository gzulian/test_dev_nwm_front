import { TestBed } from '@angular/core/testing';

import { AwsAtlasService } from './aws-atlas.service';

describe('AwsAtlasService', () => {
  let service: AwsAtlasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsAtlasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
