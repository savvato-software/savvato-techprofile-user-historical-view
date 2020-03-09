import { TestBed } from '@angular/core/testing';

import { LineItemApiService } from './line-item-api.service';

describe('LineItemApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineItemApiService = TestBed.get(LineItemApiService);
    expect(service).toBeTruthy();
  });
});
