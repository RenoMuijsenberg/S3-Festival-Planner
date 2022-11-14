import { TestBed } from '@angular/core/testing';

import { GoogleServiceDateHelperService } from './google-service-date-helper.service';

describe('GoogleServiceDateHelperService', () => {
  let service: GoogleServiceDateHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleServiceDateHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
