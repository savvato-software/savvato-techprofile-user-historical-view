import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavvatoTechprofileUserHistoricalViewComponent } from './savvato-techprofile-user-historical-view.component';

describe('SavvatoTechprofileUserHistoricalViewComponent', () => {
  let component: SavvatoTechprofileUserHistoricalViewComponent;
  let fixture: ComponentFixture<SavvatoTechprofileUserHistoricalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavvatoTechprofileUserHistoricalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavvatoTechprofileUserHistoricalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
