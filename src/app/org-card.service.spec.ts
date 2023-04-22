import { TestBed } from '@angular/core/testing';

import { OrgCardService } from './org-card.service';

describe('OrgCardService', () => {
  let service: OrgCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
