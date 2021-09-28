import { TestBed } from '@angular/core/testing';

import { EcoomerecelibService } from './ecoomerecelib.service';

describe('EcoomerecelibService', () => {
  let service: EcoomerecelibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcoomerecelibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
