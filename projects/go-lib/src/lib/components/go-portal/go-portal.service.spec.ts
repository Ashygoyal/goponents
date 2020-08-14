import { TestBed } from '@angular/core/testing';

import { GoPortalService } from './go-portal.service';

describe('GoPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoPortalService = TestBed.get(GoPortalService);
    expect(service).toBeTruthy();
  });
});
