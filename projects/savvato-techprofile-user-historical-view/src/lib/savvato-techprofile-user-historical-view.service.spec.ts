import { TestBed } from '@angular/core/testing';

import { SavvatoTechprofileUserHistoricalViewService } from './savvato-techprofile-user-historical-view.service';

describe('SavvatoTechprofileUserHistoricalViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavvatoTechprofileUserHistoricalViewService = TestBed.get(SavvatoTechprofileUserHistoricalViewService);
    expect(service).toBeTruthy();
  });
});
