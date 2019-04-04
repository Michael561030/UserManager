import {TestBed} from '@angular/core/testing';

import {GetUserByIdService} from './get-user-by-id.service';

describe('GetUserByIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserByIdService = TestBed.get(GetUserByIdService);
    expect(service).toBeTruthy();
  });
});
