import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavvatoTechprofileUserHistoricalViewComponent } from './savvato-techprofile-user-historical-view.component';
import { AllUserSessionsListingPageModule } from './src/pages/all-user-sessions-listing/all-user-sessions-listing.module';
import { QuestionSessionGradePageModule } from './src/pages/question-session-grade/question-session-grade.module';

export function getAllUserSessionsListingPageModule() {
  return AllUserSessionsListingPageModule;
}

export function getQuestionSessionGradePageModule() {
  return QuestionSessionGradePageModule;
}

const routes: Routes = [
  {
    path: '',
    component: SavvatoTechprofileUserHistoricalViewComponent
  },
  {
    path: 'all-user-sessions-listing/user/:userId/intersection/:lineItemId/:idx',
    loadChildren: getAllUserSessionsListingPageModule
  },
  {
    path: 'question/:questionId/user/:userId',
    loadChildren: getQuestionSessionGradePageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavvatoTechprofileUserHistoricalViewRoutingModule {}
