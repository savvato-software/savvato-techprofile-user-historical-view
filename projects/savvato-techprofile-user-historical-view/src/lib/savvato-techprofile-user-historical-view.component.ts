import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ModelService } from '../lib/src/_services/model.service'

import { AlertService } from '../_services/alert.service';
import { CareerGoalService } from '../_services/career-goal.service';
import { FunctionPromiseService } from '@savvato-software/savvato-javascript-services';
import { QuestionService } from '../_services/question.service';
import { LineItemAPIService } from '../_services/line-item-api.service';
import { TechProfileAPIService } from '../_services/tech-profile-api.service';
import { UserTechProfileModelService } from '../_services/user-tech-profile-model.service';
import { UserService } from '../_services/user.service';
import { ValueService } from '../_services/value.service'

import { TechProfileModelService } from '../_services/tech-profile-model.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'lib-savvato-techprofile-user-historical-view',
  templateUrl: 'savvato-techprofile-user-historical-view.component.html',
  styleUrls: ['savvato-techprofile-user-historical-view.component.scss']
})
export class SavvatoTechprofileUserHistoricalViewComponent implements OnInit {

    @Input() ctrl: any;

    route_prefix = undefined;

    userId = undefined;
    user = undefined;
    careerGoal = undefined;
    techProfile = undefined;
    answerQualityFilter = undefined;

    lxdescriptionClickHandler = undefined;

    funcKey = "past-utp-controller";

  constructor(private _location: Location,
              private _router: Router,
              private _route: ActivatedRoute,
              private _modelService: ModelService,
              private _careerGoalService: CareerGoalService,
              private _questionService: QuestionService,
              private _functionPromiseService: FunctionPromiseService,
              private _techProfileModelService: TechProfileModelService,
              private _userTechProfileModelService: UserTechProfileModelService,
              private _lineItemApiService: LineItemAPIService,
              private _userService: UserService,
              private _alertService: AlertService,
              private _valueService: ValueService ) {

  }

  environment = undefined;
  getEnvironment() {
    return this.environment;
  }

  ngOnInit() {
    let self = this;

    self._functionPromiseService.initFunc(self.funcKey, () => {
      return new Promise((resolve, reject) => {
        self._userTechProfileModelService.waitingPromise().then(() => {
          resolve({
            getEnv: () => {
              return self.environment;
            },
            getColorMeaningString: () => {
              return "A highlighted cell is one in which a question was answered by you at some session in the past. The darker the cell, the greater the percentage of those questions answered successfully."
            },
            getBackgroundColor: (lineItem, idx) => {
              let count = self._modelService.getAnsweredQuestionCountForCell(lineItem['id'], idx, self.userId);
              let max = self._modelService.getQuestionCountForCell(lineItem['id'], idx, self.userId);

              if (count && max) {
                let rtn = Math.ceil((count / max) * 10);

                let shadesOfGray = ["#E0E0E0","#D0D0D0","#C0C0C0","#B0B0B0","#A0A0A0","#909090","#808080","#707070","#606060", "#505050"]

                return shadesOfGray[rtn];
              }

              return undefined;
            },
            onLxDescriptionClick: (lineItem, idx) => {
              self._router.navigate([self.route_prefix + '/all-user-sessions-listing/user/' + self.userId + '/intersection/' + lineItem['id'] + '/' + idx]);
            }
          })
        })
      })
    })

    self.ctrl.then((ctrl) => {
        self.environment = ctrl.getEnv();
        self.user = ctrl.getUser();
        self.userId = self.user['id'];

        self._modelService._init(ctrl.getEnv());
        self._userService._init(ctrl.getEnv());
        self._techProfileModelService._init(ctrl.getEnv());
        self._questionService._init(ctrl.getEnv());
        self._lineItemApiService._init(ctrl.getEnv());
        self._userTechProfileModelService._init(ctrl.getEnv(), self.userId);

        self._careerGoalService._init(ctrl.getEnv());
        self._careerGoalService.getCareerGoalForUserId(self.userId).then((careerGoal) => {
          self.careerGoal = careerGoal;
        })

        self.lxdescriptionClickHandler = ctrl.onLxDescriptionClick;

        self.route_prefix = ctrl.getRoutePrefix && ctrl.getRoutePrefix();
        self._valueService.setValue(self.route_prefix);
      })
  }

  onLxDescriptionClick(lineItemId, idx) {
    if (this.lxdescriptionClickHandler)
      this.lxdescriptionClickHandler(lineItemId, idx);
  }

  getChosenCareerGoalName() {
    return this.careerGoal && this.careerGoal['name'];
  }

  getDtimTechprofileComponentController() {
    return this._functionPromiseService.waitAndGet(this.funcKey, this.funcKey, { });
  }

  getUserName() {
    return this.user && this.user["name"];
  }

  getScore(lineItemId) {
    let self = this;
    return self._userTechProfileModelService.getScore(lineItemId);
  }

  onFocus(evt) {
    this._modelService.setAnswerQualityFilter(evt.target.value);
  }

  onBlur(evt) {

  }

  onBackBtnClicked() {
    this._userTechProfileModelService.save().then(() => {
      this._location.back();
    });
  }
}