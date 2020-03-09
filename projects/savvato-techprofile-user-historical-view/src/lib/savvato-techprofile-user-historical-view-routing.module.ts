import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavvatoTechprofileUserHistoricalViewComponent } from './savvato-techprofile-user-historical-view.component';
import { AllUserSessionsListingPageModule } from './src/pages/all-user-sessions-listing/all-user-sessions-listing.module'

export function getAppModule() {
  return AllUserSessionsListingPageModule;
}

const routes: Routes = [
  {
    path: '',
    component: SavvatoTechprofileUserHistoricalViewComponent
  },
  {
    path: 'all-user-sessions-listing/user/:userId/intersection/:lineItemId/:idx',
    loadChildren: getAppModule
  },
  {
    path: 'question-session-grade/:questionId',
    loadChildren: './src/pages/question-session-grade/question-session-grade.module#QuestionSessionGradePageModule'    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavvatoTechprofileUserHistoricalViewRoutingModule {}
