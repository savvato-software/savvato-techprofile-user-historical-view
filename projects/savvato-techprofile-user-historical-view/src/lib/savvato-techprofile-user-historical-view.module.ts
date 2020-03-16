import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SavvatoTechprofileUserHistoricalViewRoutingModule } from './savvato-techprofile-user-historical-view-routing.module';

import { SavvatoTechprofileUserHistoricalViewComponent } from './savvato-techprofile-user-historical-view.component';

import { AllUserSessionsListingPageModule } from './src/pages/all-user-sessions-listing/all-user-sessions-listing.module'
import { QuestionSessionGradePageModule } from './src/pages/question-session-grade/question-session-grade.module'

import { DtimTechprofileModule } from '@savvato-software/dtim-techprofile-component';

@NgModule({
  declarations: [
  	SavvatoTechprofileUserHistoricalViewComponent
  ],
  imports: [
  	IonicModule.forRoot(),
  	CommonModule,
  	HttpClientModule,
  	FormsModule,

  	SavvatoTechprofileUserHistoricalViewRoutingModule,

  	DtimTechprofileModule,

  	AllUserSessionsListingPageModule,
  	QuestionSessionGradePageModule
  ],
  exports: [SavvatoTechprofileUserHistoricalViewComponent]
})
export class SavvatoTechprofileUserHistoricalViewModule { }
